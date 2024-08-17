import React from "react";
import {imgUri} from "../utils/constants"

export const RestoCard = (data) => {
    const {name, areaName,avgRating, cloudinaryImageId, sla} = data?.restoData;
  return (
    <div className="card">
    <img src = { imgUri + cloudinaryImageId}/>
     <h4>{name}</h4>
     <h4>{areaName}</h4>
     <h4>{avgRating}</h4>
     <h4>{sla?.deliveryTime}</h4>
    </div>
  );
};
