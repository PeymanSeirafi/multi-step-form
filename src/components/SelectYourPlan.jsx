import React from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function SelectYourPlan({ func }) {
  return (
    <div className="flex flex-col justify-between pt-10">
      <div>
        <div>
          <h1 className="text-primary font-[700] text-4xl">Select your plan</h1>
          <h4 className="text-gray-400 mt-2">
            You have the option of monthly or yearly billing.
          </h4>
        </div>
        <div>
          <div className="flex gap-5 mt-10 ">
            <div className="border border-gray-300 rounded-lg w-[134px] h-445 flex flex-col justify-between">
              <img src={arcade} alt="arcade" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary text-lg">Arcade</h2>
                <h3 className="font-[400] text-gray-400 text-sm">$9/mo</h3>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg w-[134px] h-44 flex flex-col justify-between">
              <img src={advanced} alt="advanced" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary text-lg">Advanced</h2>
                <h3 className="font-[400] text-gray-400 text-sm">$12/mo</h3>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg w-[134px] h-44 flex flex-col justify-between">
              <img src={pro} alt="pro" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary text-lg">Pro</h2>
                <h3 className="font-[400] text-gray-400 text-sm">$15/mo</h3>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg flex items-center justify-center p-2 my-5 gap-5">
            <h3 className="font-[700]">Monthly</h3>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-9 h-5 bg-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <h3 className="font-[400] text-gray-400">Yearly</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button
          className="text-gray-500 font-[500] transition-all duration-200 hover:text-primary"
          onClick={(event) => func(1)}
        >
          Go Back
        </button>
        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default SelectYourPlan;
