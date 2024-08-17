import React from "react";
import {RestoCard} from "./RestoCard"
import {restoList} from "../utils/mockdata"

export const RestoContainer = () => {
  return (
    <div>
    <div className="filter-btn">
      <button>Top rated restaurants</button>
    </div>
    <div className="container">
        {restoList.map((ele) => {
          return <RestoCard key= {ele?.info?.id} restoData = {ele.info}/>
        })}
    </div>
    </div>
  );
};
