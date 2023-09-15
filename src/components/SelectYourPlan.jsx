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
        "border-2 bg-blue-50 border-blue-800 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer";

      document.getElementById("advanced").classList.remove("bg-blue-50");
      document.getElementById("advanced").classList.add("border-gray-300");
      document.getElementById("advanced").classList.remove("border-blue-800");
      document.getElementById("pro").classList.remove("bg-blue-50");
      document.getElementById("pro").classList.remove("border-blue-800");
      document.getElementById("pro").classList.add("border-gray-300");
    } else if (newData.plan === "Advanced") {
      document.getElementById("advanced").className =
        "border-2 bg-blue-50 border-blue-800 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer";
      document.getElementById("arcade").classList.remove("bg-blue-50");
      document.getElementById("arcade").classList.add("border-gray-300");
      document.getElementById("arcade").classList.remove("border-blue-800");
      document.getElementById("pro").classList.remove("bg-blue-50");
      document.getElementById("pro").classList.remove("border-blue-800");
      document.getElementById("pro").classList.add("border-gray-300");
    } else {
      document.getElementById("pro").className =
        "border-2 bg-blue-50 border-blue-800 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer";

      document.getElementById("advanced").classList.remove("bg-blue-50");
      document.getElementById("advanced").classList.add("border-gray-300");
      document.getElementById("advanced").classList.remove("border-blue-800");
      document.getElementById("arcade").classList.remove("bg-blue-50");
      document.getElementById("arcade").classList.remove("border-blue-800");
      document.getElementById("arcade").classList.add("border-gray-300");
    }
  });

  return (
    <>
      <div className="flex flex-col justify-between max-[500px]:py-2 pt-0 min-[500px]:pt-10">
        <div>
          <div>
            <h1 className="text-primary font-[700] text-[20pt] min-[500px]:text-3xl lg:text-4xl">
              Select your plan
            </h1>
            <h4 className="text-gray-400 mt-2 text-sm lg:text-base">
              You have the option of monthly or yearly billing.
            </h4>
          </div>
          <div>
            <div className="flex max-[500px]:flex-col gap-3 min-[500px]:gap-5 mt-5 lg:mt-10 ">
              <div
                className="border-2 border-gray-300 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer"
                id="arcade"
                onClick={(event) =>
                  setNewData((prev) => ({ ...prev, plan: "Arcade" }))
                }
              >
                <img
                  src={arcade}
                  alt="arcade"
                  className="mx-4 m-2 min-[500px]:m-4"
                  width={40}
                />
                <div className="m-2 min-[500px]:m-4 max-[500px]:mx-0">
                  <h2 className="font-[700] text-primary lg:text-lg min-[500px]:mt-4">
                    Arcade
                  </h2>
                  <h3 className="font-[400] text-gray-400 text-sm">
                    {newData.planType === "Monthly" ? "$9/mo" : "$90/yr"}
                  </h3>
                  {newData.planType === "Yearly" && (
                    <h3 className="font-[500] text-blue-800/60 text-xs min-[500px]:mt-2">
                      2 months free
                    </h3>
                  )}
                </div>
              </div>
              <div
                className="border-2 border-gray-300 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer"
                id="advanced"
                onClick={(event) =>
                  setNewData((prev) => ({ ...prev, plan: "Advanced" }))
                }
              >
                <img
                  src={advanced}
                  alt="advanced"
                  className="mx-4 m-2 min-[500px]:m-4"
                  width={40}
                />
                <div className="m-2 min-[500px]:m-4 max-[500px]:mx-0">
                  <h2 className="font-[700] text-primary lg:text-lg min-[500px]:mt-4">
                    Advanced
                  </h2>
                  <h3 className="font-[400] text-gray-400 text-sm">
                    {newData.planType === "Monthly" ? "$12/mo" : "$120/yr"}
                  </h3>
                  {newData.planType === "Yearly" && (
                    <h3 className="font-[500] text-blue-800/60 text-xs min-[500px]:mt-2">
                      2 months free
                    </h3>
                  )}
                </div>
              </div>
              <div
                className="border-2 border-gray-300 rounded-lg max-[500px]:w-full max-[500px]:flex-row max-[500px]:justify-start w-[110px] lg:w-[134px] flex flex-col justify-between hover:border-2 hover:border-blue-800 hover:cursor-pointer"
                id="pro"
                onClick={(event) =>
                  setNewData((prev) => ({ ...prev, plan: "Pro" }))
                }
              >
                <img
                  src={pro}
                  alt="pro"
                  className="mx-4 m-2 min-[500px]:m-4"
                  width={40}
                />
                <div className="m-2 min-[500px]:m-4 min-[500px]:m-4 max-[500px]:mx-0">
                  <h2 className="font-[700] text-primary lg:text-lg min-[500px]:mt-4">
                    Pro
                  </h2>
                  <h3 className="font-[400] text-gray-400 text-sm">
                    {newData.planType === "Monthly" ? "$15/mo" : "$150/yr"}
                  </h3>
                  {newData.planType === "Yearly" && (
                    <h3 className="font-[500] text-blue-800/60 text-xs min-[500px]:mt-2">
                      2 months free
                    </h3>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-lightGray rounded-lg flex items-center justify-center p-2 my-0 mt-3 min-[500px]:my-5 gap-5">
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
                <div className="w-9 h-5 bg-primary peer-focus:border-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-800 after:border-2 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
              </label>
              <h3 id="yearly">Yearly</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4 mt-5 md:mt-3 max-[500px]:hidden">
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
      <div className="flex justify-between fixed bottom-0 left-0 bg-white p-4 w-full min-[500px]:hidden">
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
    </>
  );
}

export default SelectYourPlan;
