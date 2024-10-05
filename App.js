import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"
import {RestoContainer} from "./components/Container"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

root.render(<RouterProvider router={appRouter}/>);
