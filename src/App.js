import React from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const [steps, setSteps] = React.useState([
    { key: 1, id: 1, name: "YOUR INFO", active: true },
    { key: 2, id: 2, name: "SELECT PLAN", active: false },
    { key: 3, id: 3, name: "ADD-ONS", active: false },
    { key: 4, id: 4, name: "SUMMARY", active: false },
  ]);

  const [formData, setFormData] = React.useState({
    name: "Ali",
    email: "Reaza",
    number: "MMD",
  });

  console.log(formData);

  function nextStep(step) {
    setSteps((prev) => {
      let ans = [];
      for (let i of prev) {
        if (i.id !== step) {
          ans.push({ ...i, active: false });
        } else {
          ans.push({ ...i, active: true });
        }
      }
      return ans;
    });
  }
  return (
    <div className="bg-white rounded-xl drop-shadow-xl p-5 pr-20 flex gap-20">
      <Sidebar steps={steps} />
      <PersonalInfo func={nextStep} data={formData} setData={setFormData} />
    </div>
  );
}

export default App;
