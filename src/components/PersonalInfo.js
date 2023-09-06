import React from "react";

function PersonalInfo({ func }) {
  function validate() {
    const nameBox = document.getElementById("name");
    const emailBox = document.getElementById("email");
    const numberBox = document.getElementById("number");

    const name = nameBox.value;
    const email = emailBox.value;
    const number = numberBox.value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const numberError = document.getElementById("numberError");

    let isValied = true;

    if (!/\S/.test(name)) {
      nameBox.classList.add("border-strawberry");
      nameError.innerHTML = "This field is required";
      isValied = false;
    } else {
      nameBox.classList.remove("border-strawberry");
      nameError.innerHTML = "";
    }

    if (!/\S/.test(email)) {
      emailBox.classList.add("border-strawberry");
      emailError.innerHTML = "This field is required";
      isValied = false;
    } else if (
      !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(email)
    ) {
      emailBox.classList.add("border-strawberry");
      emailError.innerHTML = "Please enter valid email";
      isValied = false;
    } else {
      emailBox.classList.remove("border-strawberry");
      emailError.innerHTML = "";
    }

    if (!/\S/.test(number)) {
      numberBox.classList.add("border-strawberry");
      numberError.innerHTML = "This field is required";
      isValied = false;
    } else if (!/^\+[0-9]{8,16}$/.test(number.split(" ").join(""))) {
      numberBox.classList.add("border-strawberry");
      numberError.innerHTML = "Please enter valid number";
      isValied = false;
    } else {
      numberBox.classList.remove("border-strawberry");
      numberError.innerHTML = "";
    }

    if (isValied) {
      func(2);
    }
  }
  return (
    <div className="flex flex-col justify-between pt-10">
      <div>
        <h1 className="text-primary font-[700] text-4xl">Personal Info</h1>
        <h4 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h4>
        <div className="mt-10 text-[#355379] flex flex-col gap-6 font-[500]">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <div
                className="text-sm text-strawberry font-[700]"
                id="nameError"
              ></div>
            </div>
            <input
              placeholder="e.g. Stephen King"
              id="name"
              className="border border-gray-300 rounded-md p-2 px-4 w-full focus:outline-blue-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
              <div
                className="text-sm text-strawberry font-[700]"
                id="emailError"
              ></div>
            </div>
            <input
              placeholder="e.g. stephenking@lorem.com"
              id="email"
              className="border border-gray-300 rounded-md p-2 px-4 w-full focus:outline-blue-800"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label htmlFor="number" className="text-sm">
                Phone Number
              </label>
              <div
                className="text-sm text-strawberry font-[700]"
                id="numberError"
              ></div>
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
        <button
          className="bg-primary text-white px-7 py-3 rounded-md text-sm font-[500] transition-all duration-200 hover:bg-blue-900"
          onClick={validate}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
