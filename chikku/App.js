import React from "react";
import ReactDOM from "react-dom/client";

// //react Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
console.log(heading);

//this code is very clumsy ---->so fb developers create JSX
// now how to create h1 using jsx

//jsx
//JSX=>React.createElement=>reactElement-js object ->html tag(rendered)
const JsxHeading = () => (
  <h1 className="jsxheading"> Namaste React Using Jsx🚀</h1>
); //this is not a pure javascript ->js engine cant read this code --->question if it is not js code then how it is work?
//jsx()(transpiled(convert into code that browser understand) before it reaches the js engine)--->transplled is done by parcel-------->it give to BABEL WHO TRANSPILED THE CODE FOR PARCEL

// console.log(jsxHeading)

//react functional component ->just js function->return jsx/reactElement

const Header = () => <h1>Namaste react functional component</h1>;
const Header1 = () => {
  return (
    <div>
      <JsxHeading />
      <h1>Namaste react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header1 />);
