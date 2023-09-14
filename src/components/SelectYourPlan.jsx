import React from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function SelectYourPlan({ func, data, setData }) {
  const [newData, setNewData] = React.useState(data);

  React.useEffect(() => {
    if (newData.planType === "Yearly") {
      document.getElementById("planType").checked = true;
      document.getElementById("monthly").className =
        "transition-all duration-500 text-gray-400 font-bold";
      document.getElementById("yearly").className =
        "transition-all duration-500 text-primary text-lg font-bold";
    } else {
      document.getElementById("planType").checked = false;
      document.getElementById("monthly").className =
        "transition-all duration-500 text-primary text-lg font-bold";
      document.getElementById("yearly").className =
        "transition-all duration-500 text-gray-400 font-bold";
    }
  });

  React.useEffect(() => {
    if (newData.plan === "Arcade") {
      document.getElementById("arcade").className =
        "outline bg-blue-50 outline-blue-800 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer";

      document.getElementById("advanced").classList.remove("bg-blue-50");
      document.getElementById("advanced").classList.add("outline-gray-300");
      document.getElementById("pro").classList.remove("bg-blue-50");
      document.getElementById("pro").classList.add("outline-gray-300");
    } else if (newData.plan === "Advanced") {
      document.getElementById("advanced").className =
        "outline bg-blue-50 outline-blue-800 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer";
      document.getElementById("arcade").classList.remove("bg-blue-50");
      document.getElementById("arcade").classList.add("outline-gray-300");
      document.getElementById("pro").classList.remove("bg-blue-50");
      document.getElementById("pro").classList.add("outline-gray-300");
    } else {
      document.getElementById("pro").className =
        "outline bg-blue-50 outline-blue-800 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer";

      document.getElementById("advanced").classList.remove("bg-blue-50");
      document.getElementById("advanced").classList.add("outline-gray-300");
      document.getElementById("arcade").classList.remove("bg-blue-50");
      document.getElementById("arcade").classList.add("outline-gray-300");
    }
  });

  return (
    <div className="flex flex-col justify-between pt-10">
      <div>
        <div>
          <h1 className="text-primary font-[700] text-3xl lg:text-4xl">
            Select your plan
          </h1>
          <h4 className="text-gray-400 mt-2 text-sm lg:text-base">
            You have the option of monthly or yearly billing.
          </h4>
        </div>
        <div>
          <div className="flex gap-5 mt-5 lg:mt-10 ">
            <div
              className="outline outline-gray-300 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer"
              id="arcade"
              onClick={(event) =>
                setNewData((prev) => ({ ...prev, plan: "Arcade" }))
              }
            >
              <img src={arcade} alt="arcade" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary lg:text-lg mt-4">
                  Arcade
                </h2>
                <h3 className="font-[400] text-gray-400 text-sm">
                  {newData.planType === "Monthly" ? "$9/mo" : "$90/yr"}
                </h3>
                {newData.planType === "Yearly" && (
                  <h3 className="font-[500] text-blue-800/60 text-xs mt-2">
                    2 months free
                  </h3>
                )}
              </div>
            </div>
            <div
              className="outline outline-gray-300 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer"
              id="advanced"
              onClick={(event) =>
                setNewData((prev) => ({ ...prev, plan: "Advanced" }))
              }
            >
              <img src={advanced} alt="advanced" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary lg:text-lg mt-4">
                  Advanced
                </h2>
                <h3 className="طfont-[400] text-gray-400 text-sm">
                  {newData.planType === "Monthly" ? "$12/mo" : "$120/yr"}
                </h3>
                {newData.planType === "Yearly" && (
                  <h3 className="font-[500] text-blue-800/60 text-xs mt-2">
                    2 months free
                  </h3>
                )}
              </div>
            </div>
            <div
              className="outline outline-gray-300 rounded-lg w-[110px] lg:w-[134px] flex flex-col justify-between hover:outline hover:outline-blue-800 hover:border-0 hover:cursor-pointer"
              id="pro"
              onClick={(event) =>
                setNewData((prev) => ({ ...prev, plan: "Pro" }))
              }
            >
              <img src={pro} alt="pro" className="m-4" width={40} />
              <div className="m-4">
                <h2 className="font-[700] text-primary lg:text-lg mt-4">Pro</h2>
                <h3 className="font-[400] text-gray-400 text-sm">
                  {newData.planType === "Monthly" ? "$15/mo" : "$150/yr"}
                </h3>
                {newData.planType === "Yearly" && (
                  <h3 className="font-[500] text-blue-800/60 text-xs mt-2">
                    2 months free
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div className="bg-lightGray rounded-lg flex items-center justify-center p-2 my-5 gap-5">
            <h3 id="monthly">Monthly</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                id="planType"
                onChange={(event) =>
                  setNewData((prev) => ({
                    ...prev,
                    planType:
                      newData.planType === "Monthly" ? "Yearly" : "Monthly",
                  }))
                }
              />
              <div className="w-9 h-5 bg-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-800 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <h3 id="yearly">Yearly</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 mt-5 md:mt-3">
        <button
          className="text-gray-500 font-[500] transition-all duration-200 hover:text-primary"
          onClick={(event) => {
            setData((prev) => ({
              ...prev,
              planType: newData.planType,
              plan: newData.plan,
            }));
            func(1);
          }}
        >
          Go Back
        </button>
        <button
          className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900"
          onClick={(event) => {
            setData((prev) => ({
              ...prev,
              planType: newData.planType,
              plan: newData.plan,
            }));
            func(3);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default SelectYourPlan;
