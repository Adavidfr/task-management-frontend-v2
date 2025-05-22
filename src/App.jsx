import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import MembersList from "./components/MembersList";
import AddTask from "./components/Task/AddTask";

function App() {
  return (
    <div className="min-h-screen flex bg-background p-6">
      <Sidebar />
      <main className="min-h-screen bg-gray-100 px-6 flex-grow">
        <Navbar />
        <div className="flex justify-between gap-6 h-[calc(100vh-100px)]">
          <div className="flex-[3] h-full overflow-y-auto">
            <TaskList />
          </div>

          <div className="flex-[2] flex flex-col gap-4">
            <div className="flex-1">
              <CalendarView />
            </div>
            <div className="flex-1">
              <MembersList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // return <AddTask />;
}

export default App;
