import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1 className="test">Hello I am React.</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => {
  return <h1>I am title</h1>;
};

const title = <h1>I am title</h1>;


//Component composition
const Header = () => {
  return <div>
    title
    {title}
    {Title()}
    <Title />
    <h1>I am Header</h1>
  </div>
};

root.render(<Header/>);
