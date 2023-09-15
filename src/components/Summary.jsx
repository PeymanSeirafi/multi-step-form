import React from "react";
import thankYou from "../assets/images/icon-thank-you.svg";

function Summary({ func, data }) {
  const [isDone, setIsDone] = React.useState(false);
  let planVal = 0;
  if (data.plan === "Arcade") {
    planVal = 9;
  } else if (data.plan === "Advanced") {
    planVal = 12;
  } else {
    planVal = 15;
  }

  let finalVal = planVal;

  if (data.online) {
    finalVal += 1;
  }

  if (data.storage) {
    finalVal += 2;
  }

  if (data.profile) {
    finalVal += 2;
  }

  if (data.planType === "Yearly") {
    planVal *= 10;
    finalVal *= 10;
  }

  return (
    <div>
      {!isDone && (
        <>
          <div className="flex flex-col justify-between max-[500px]:py-2 pt-0 min-[500px]:pt-10 h-full">
            <div>
              <div>
                <h1 className="text-primary font-[700] text-[20pt] min-[500px]:text-3xl lg:text-4xl">
                  Finishing up
                </h1>
                <h4 className="text-gray-400 mt-2 text-sm lg:text-base">
                  Double-check everything looks OK before confirming.
                </h4>
              </div>
              <div className="flex flex-col gap-4 mt-5 lg:mt-10">
                <div className="bg-lightGray p-5 flex flex-col gap-3 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-primary font-bold">
                        {data.plan} ({data.planType})
                      </h2>
                      <button
                        className="text-gray-400 underline tranition-all duration-300 hover:text-purplish"
                        onClick={(event) => func(2)}
                      >
                        change
                      </button>
                    </div>
                    <h2 className="text-primary font-bold text-lg">
                      ${planVal}
                      {data.planType === "Monthly" ? "/mo" : "/yr"}
                    </h2>
                  </div>
                  <hr />
                  <ul className="flex flex-col gap-3 text-gray-400">
                    {data.online && (
                      <li className="flex justify-between">
                        <h3 className="text-sm">Online service</h3>
                        <h3 className="text-sm">
                          +${data.planType === "Monthly" ? "1/mo" : "10/yr"}
                        </h3>
                      </li>
                    )}
                    {data.storage && (
                      <li className="flex justify-between">
                        <h3 className="text-sm">Larger storage</h3>
                        <h3 className="text-sm">
                          +${data.planType === "Monthly" ? "2/mo" : "20/yr"}
                        </h3>
                      </li>
                    )}
                    {data.profile && (
                      <li className="flex justify-between">
                        <h3 className="text-sm">Customizable profile</h3>
                        <h3 className="text-sm">
                          +${data.planType === "Monthly" ? "2/mo" : "20/yr"}
                        </h3>
                      </li>
                    )}

                    {data.profile === false &&
                      data.online === false &&
                      data.storage === false && (
                        <h3 className="text-sm">There isn't any add-ones</h3>
                      )}
                  </ul>
                </div>
                <div className="flex justify-between mx-8 items-center">
                  <h3 className="text-gray-400 font-[500]">
                    Total (per {data.planType === "Monthly" ? "month" : "year"})
                  </h3>
                  <h2 className="font-bold text-lg text-blue-700">
                    +${finalVal}
                    {data.planType === "Monthly" ? "/mo" : "/yr"}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-4 mt-10 md:mt-3 max-[500px]:hidden">
              <button
                className="text-gray-500 font-[500] transition-all duration-200 hover:text-primary"
                onClick={(event) => {
                  func(3);
                }}
              >
                Go Back
              </button>
              <button
                className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900"
                onClick={(event) => {
                  setIsDone(true);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="flex justify-between p-4 fixed left-0 bottom-0 w-full bg-white min-[500px]:hidden">
            <button
              className="text-gray-500 font-[500] transition-all duration-200 hover:text-primary"
              onClick={(event) => {
                func(3);
              }}
            >
              Go Back
            </button>
            <button
              className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900"
              onClick={(event) => {
                setIsDone(true);
              }}
            >
              Confirm
            </button>
          </div>
        </>
      )}
      {isDone && (
        <div className="min-[500px]:w-[400px] h-full flex flex-col items-center justify-center">
          <img src={thankYou} alt="thankYou" />
          <h1 className="mt-8 text-primary font-[700] text-4xl">Thank you!</h1>
          <p className="mt-5 text-center text-gray-400">
            Thank you! Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </p>
        </div>
      )}
    </div>
  );
}

export default Summary;
