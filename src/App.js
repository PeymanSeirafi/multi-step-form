import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [steps, setSteps] = React.useState([
    { key: 1, id: 1, name: "YOUR INFO", active: true },
    { key: 2, id: 2, name: "SELECT PLAN", active: false },
    { key: 3, id: 3, name: "ADD-ONS", active: false },
    { key: 4, id: 4, name: "SUMMARY", active: false },
  ]);

  return (
    <div className="bg-white rounded-xl drop-shadow-xl p-5 flex">
      <Sidebar steps={steps} />
    </div>
  );
}

export default App;
