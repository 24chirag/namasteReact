import React from "react";
import reactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"
import Pamplet from "./components/Pamplet";


const AppLayout=()=>{
   return (
    <div className="app">
    {/* HEADER */}
    <Header/>
    {/* body Container */}

    <div className="bodyContainer">
        <div className="vegImg">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        </div>
        <Body/>
        <div className="vegImg1">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        </div>
    
    </div>
    {/* pamplet bar */}
    <Pamplet/>


    </div>
   )
}


const root = reactDOM.createRoot(document.getElementById(("root")))
root.render(<AppLayout/>)
