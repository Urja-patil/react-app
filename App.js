import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"
import {RestoContainer} from "./components/Container"


/**
 * 
 * @returns
 * Header
 * logo
 * nav items
 * Body
 * Search
 * Resto container
 * resto card
 * Footer
 * Copyright
 * desclaimer
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return <div className="app">
      <Header/>
  <RestoContainer/>
  </div>
}

root.render(<AppLayout/>);
