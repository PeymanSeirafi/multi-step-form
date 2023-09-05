import React from "react";

function Step({ id, name, active }) {
  const isActive = !active
    ? "rounded-full bg-transparent text-white border-2 w-12 h-12 flex items-center justify-center text-md font-[500]"
    : "rounded-full bg-[#bfe2fd] w-12 h-12 flex items-center justify-center text-md font-[500]";
  return (
    <div className="flex gap-4 items-center">
      <div className={isActive}>{id}</div>
      <div>
        <h5 className="text-xs font-[400] text-[#d6d9e6]">Step {id}</h5>
        <h3 className="text-md font-[500] text-white">{name}</h3>
      </div>
    </div>
  );
}

export default Step;
