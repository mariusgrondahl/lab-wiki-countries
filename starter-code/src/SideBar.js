import React from "react";
import "./SideBar.css";

export default function SideBar (props) {
    return(
    <div className="SideBar">
         <ul>
             {this.props.children}
         </ul>
    </div>
    )
}