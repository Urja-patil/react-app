import React, { useState } from "react";
import {logoUri} from "../utils/constants"

const navItem = ["Home", "About", "Contact", "Cart"];

export const Header = () => {

  return (
    <div className="header">
       <div className="logo">
      <img src={logoUri} />
      </div>
      <ul>
        {navItem.map((ele) => {
         return <li key={"nav-"+ele}>{ele}</li>;
        })}
      </ul>
    </div>
  );
};
