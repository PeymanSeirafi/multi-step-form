import React from "react";
import sidebar_img from "../assets/images/bg-sidebar-desktop.svg";
import mobile_img from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";

function Sidebar(props) {
  const steps = props.steps.map((item) => (
    <Step id={item.id} name={item.name} active={item.active} />
  ));
  return (
    <div className="absolute top-0 left-0 right-0 min-[500px]:relative block min-[500px]:hidden md:block">
      <img
        className="hidden min-[500px]:block"
        src={sidebar_img}
        alt="sidebar_img"
      />
      <img
        className="block w-full min-[500px]:w-auto min-[500px]:hidden"
        src={mobile_img}
        alt="sidebar_img"
      />
      <div className="absolute top-8 left-8 flex min-[500px]:flex-col gap-4">
        {steps}
      </div>
    </div>
  );
}

export default Sidebar;
