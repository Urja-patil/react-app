import React from "react";
import { useState } from "react";
import { RestoCard } from "./RestoCard";
import { data } from "../utils/mockdata";

export const RestoContainer = () => {
  let [restoList, setRestoList] = useState(data);

  handleOnClick = () => {
    const filteredList = restoList.filter((resto) => resto.info.avgRating >= 4);
    setRestoList(filteredList);
  };

  return (
    <div>
      <div className="filter-btn">
        <button onClick={handleOnClick}>Top rated restaurants</button>
      </div>
      <div className="container">
        {restoList.map((ele) => {
          return <RestoCard key={ele?.info?.id} restoData={ele.info} />;
        })}
      </div>
    </div>
  );
};
