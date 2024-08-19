import React, { useEffect } from "react";
import { useState } from "react";
import { RestoCard } from "./RestoCard";
import { Shimmer } from "./Shimmer";
import { apiUri } from "../utils/constants";

export const RestoContainer = () => {
  let [restoList, setRestoList] = useState([]);
  let [filteredRestoList, setFilteredRestoList] = useState([]);
  const [btn, setButton] = useState("Login");
  const [searchText, setSearchText] = useState("");

  handleOnClick = () => {
    const filteredList = restoList.filter((resto) => resto.info.avgRating >= 4);
    setFilteredRestoList(filteredList);
  };

  fetchData = async () => {
    const res = await fetch(apiUri);
    const json = await res.json();
    console.log(json);
    setRestoList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestoList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restoList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setRestoList(restoList);
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = restoList.filter((resto) =>
              resto?.info?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase())
            );
            setFilteredRestoList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button onClick={handleOnClick}>Top rated restaurants</button>
        <button
          onClick={() => {
            btn === "Login" ? setButton("Logout") : setButton("Login");
          }}
        >
          {btn}
        </button>
      </div>
      <div className="container">
        {filteredRestoList.map((ele) => {
          return <RestoCard key={ele?.info?.id} restoData={ele?.info} />;
        })}
      </div>
    </div>
  );
};
