import React from "react";
import "./App.css";
import DashboardCard from "./Dashboard_card";
import DataEngine from "./Dashboard_Card/card_components/graph_data";

function App() {
  return (
    <div className="App">
      <DashboardCard data={DataEngine}></DashboardCard>
    </div>
  );
}

export default App;
