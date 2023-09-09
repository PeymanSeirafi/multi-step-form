import React from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectYourPlan from "./components/SelectYourPlan";
import AddOnes from "./components/AddOnes";
import Summary from "./components/Summary";

function App() {
  const [steps, setSteps] = React.useState([
    { key: 1, id: 1, name: "YOUR INFO", active: true },
    { key: 2, id: 2, name: "SELECT PLAN", active: false },
    { key: 3, id: 3, name: "ADD-ONS", active: false },
    { key: 4, id: 4, name: "SUMMARY", active: false },
  ]);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    number: "",
    plan: "Arcade",
    planType: "Monthly",
    online: false,
    storage: false,
    profile: false,
  });

  console.log(formData);

  function selectStep(step) {
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
    <div className="bg-white rounded-xl drop-shadow-xl p-5 pr-20 flex gap-20 mx-5">
      <Sidebar steps={steps} />
      {steps[0].active && (
        <PersonalInfo func={selectStep} data={formData} setData={setFormData} />
      )}
      {steps[1].active && (
        <SelectYourPlan
          func={selectStep}
          data={formData}
          setData={setFormData}
        />
      )}
      {steps[2].active && (
        <AddOnes func={selectStep} data={formData} setData={setFormData} />
      )}
      {steps[3].active && <Summary func={selectStep} data={formData} />}
    </div>
  );
}

export default App;
