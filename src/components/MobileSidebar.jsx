import React from "react";
import mobile_img from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";

function MobileSidebar(props) {
  const steps = props.steps.map((item) => (
    <Step id={item.id} name={item.name} active={item.active} />
  ));
  return (
    <div className="absolute top-0 left-0 right-0 min-[500px]:relative block min-[500px]:hidden">
      <img className="block w-full" src={mobile_img} alt="sidebar_img" />
      <div className="absolute top-8 left-[50%] -translate-x-[50%] flex gap-4">
        {steps}
      </div>
    </div>
  );
}

export default MobileSidebar;
