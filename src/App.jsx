import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen flex bg-background p-6">
      <Sidebar />
      <Navbar />
      <TaskList />
    </div>
  );
}

export default App;
