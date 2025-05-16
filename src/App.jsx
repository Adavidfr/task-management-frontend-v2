import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-2xl font-semibold text-gray-700">¡Hola, David!</h1>
      <Sidebar />
    </div>
  );
}

export default App;
