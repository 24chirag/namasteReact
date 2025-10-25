import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement('h1',{
//     id:"heading"
// },"Hello world from React!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading) //convert heading object into heading tag and put it on browser

//     console.log(heading)//basically a reacth1Object ->object

// now we want to create structure like  in react
{
  /* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
    </div>
</div> */
}
{
  /* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div> */
}
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "this is namaste react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);
root.render(heading);
