import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
// import CalendarView from "./components/Calendar/CalendarView";

function App() {
  // return (
  //   <div className="min-h-screen flex bg-background p-6">
  //     <Sidebar />
  //     <main className="min-h-screen bg-gray-100 px-6 flex-grow">
  //       <Navbar />
  //       <div className="flex justify-between gap-6">
  //         <TaskList />
  //         <CalendarView />
  //       </div>
  //     </main>
  //   </div>
  // );

  return (
    <div className="min-h-screen flex bg-background p-6">
      <Sidebar />
      <main className="min-h-screen bg-gray-100 px-6 flex-grow">
        <Navbar />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
