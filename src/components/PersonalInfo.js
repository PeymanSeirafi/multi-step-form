import React from "react";

function PersonalInfo() {
  return (
    <div className="flex flex-col justify-between pt-10">
      <div>
        <h1 className="text-primary font-[700] text-4xl">Personal Info</h1>
        <h4 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h4>
        <div className="mt-10 text-[#355379] flex flex-col gap-6 font-[500]">
          <div className="flex flex-col gap-1">
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
            </div>
            <input
              placeholder="e.g. Stephen King"
              id="name"
              className="border border-gray-300 rounded-md p-2 px-4 w-full focus:outline-blue-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
            </div>
            <input
              placeholder="e.g. stephenking@lorem.com"
              id="email"
              className="border border-gray-300 rounded-md p-2 px-4 w-full focus:outline-blue-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <label htmlFor="number" className="text-sm">
                Phone Number
              </label>
            </div>
            <input
              placeholder="e.g. +1 234 567 890"
              id="number"
              className="border border-gray-300 rounded-md p-2 px-4 w-full focus:outline-blue-800"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
