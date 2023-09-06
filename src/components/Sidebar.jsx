import React from "react";
import sidebar_img from "../assets/images/bg-sidebar-desktop.svg";
import Step from "./Step";

function Sidebar(props) {
  const steps = props.steps.map((item) => (
    <Step id={item.id} name={item.name} active={item.active} />
  ));
  return (
    <div className="relative">
      <img src={sidebar_img} alt="sidebar_img" />
      <div className="absolute top-8 left-8 flex flex-col gap-4">{steps}</div>
    </div>
  );
}

export default Sidebar;
