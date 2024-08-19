import React, { useEffect } from "react";
import { useState } from "react";
import { RestoCard } from "./RestoCard";
import { data } from "../utils/mockdata";
import { Shimmer } from "./Shimmer";

export const RestoContainer = () => {
  let [restoList, setRestoList] = useState([]);

  handleOnClick = () => {
    const filteredList = restoList.filter((resto) => resto.info.avgRating >= 4);
    setRestoList(filteredList);
  };

  fetchData = async () =>{
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await res.json()
    console.log(json)
    setRestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    restoList?.length === 0? <Shimmer/> :<div>
      <div className="filter-btn">
        <button onClick={handleOnClick}>Top rated restaurants</button>
      </div>
      <div className="container">
        {restoList.map((ele) => {
          return <RestoCard key={ele?.info?.id} restoData={ele?.info} />;
        })}
      </div>
    </div>
  );
};
