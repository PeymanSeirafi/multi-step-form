import React from "react";

function AddOnes({ func, data, setData }) {
  const [newData, setNewData] = React.useState(data);

  function changeAddOnes(event) {
    setNewData((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  }

  return (
    <div className="flex flex-col justify-between pt-10">
      <div>
        <div>
          <h1 className="text-primary font-[700] text-4xl">Pick add-ons</h1>
          <h4 className="text-gray-400 mt-2">
            Add-ons help enhance your gaming experience.
          </h4>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <label className="flex justify-between items-center border border-gray-300 rounded-lg px-6 py-5 cursor-pointer">
            <div className="flex gap-6 items-center mr-[119px]">
              <div className="flex relative">
                <input
                  type="checkbox"
                  className="h-6 w-6 items-center peer appearance-none bg-white border checked:border-none border-slate-800 checked:bg-purplish rounded hover:cursor-pointer"
                  name="online"
                  onChange={changeAddOnes}
                  checked={newData.online}
                />
                <svg
                  className="w-5 absolute left-[2px] top-[2px] justify-center items-center hidden peer-checked:flex"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <h2 className="text-primary font-[500]">Online service</h2>
                <h4 className="text-gray-400 text-sm">
                  Access to multiplayer games
                </h4>
              </div>
            </div>
            <h3 className="text-purplish text-sm">+$2/mo</h3>
          </label>
          <label className="flex justify-between items-center border border-gray-300 rounded-lg px-6 py-5 cursor-pointer">
            <div className="flex gap-6 items-center mr-[119px]">
              <div className="flex relative">
                <input
                  type="checkbox"
                  className="h-6 w-6 peer items-center appearance-none bg-white border checked:border-none border-slate-800 checked:bg-purplish rounded hover:cursor-pointer"
                  name="storage"
                  onChange={changeAddOnes}
                  checked={newData.storage}
                />
                <svg
                  className="w-5 absolute left-[2px] top-[2px] justify-center items-center hidden peer-checked:flex"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <h2 className="text-primary font-[500]">Larger storage</h2>
                <h4 className="text-gray-400 text-sm">
                  Extra 1TB of cloud save
                </h4>
              </div>
            </div>
            <h3 className="text-purplish text-sm">+$2/mo</h3>
          </label>
          <label className="flex justify-between items-center border border-gray-300 rounded-lg px-6 py-5 cursor-pointer">
            <div className="flex gap-6 items-center mr-[119px]">
              <div className="flex relative">
                <input
                  type="checkbox"
                  className="h-6 w-6 peer items-center appearance-none bg-white border checked:border-none border-slate-800 checked:bg-purplish rounded hover:cursor-pointer"
                  name="profile"
                  onChange={changeAddOnes}
                  checked={newData.profile}
                />
                <svg
                  className="w-5 absolute left-[2px] top-[2px] justify-center items-center hidden peer-checked:flex"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <h2 className="text-primary font-[500]">
                  Customizable Profile
                </h2>
                <h4 className="text-gray-400 text-sm">
                  Custom theme on your profile
                </h4>
              </div>
            </div>
            <h3 className="text-purplish text-sm">+$2/mo</h3>
          </label>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button
          className="text-gray-500 font-[500] transition-all duration-200 hover:text-primary"
          onClick={(event) => {
            setData((prev) => ({
              ...prev,
              online: newData.online,
              storage: newData.storage,
              profile: newData.profile,
            }));
            func(2);
          }}
        >
          Go Back
        </button>
        <button
          className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900"
          onClick={(event) => {
            setData((prev) => ({
              ...prev,
              online: newData.online,
              storage: newData.storage,
              profile: newData.profile,
            }));
            func(4);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOnes;