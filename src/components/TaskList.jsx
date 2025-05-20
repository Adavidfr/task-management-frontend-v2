import { Plus, CheckCircle } from "lucide-react"; // o la librería de iconos que uses

export default function TaskList() {
  const tasks = [
    "Create Wireframe",
    "Slack Logo Design",
    "Dashboard Design",
    "Create Wireframe (Done)",
    "Slack Logo Design (Done)",
    "App Icon Design",
  ];

  return (
    <section className="col-span-2 bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          My Tasks <span className="text-gray-400 text-sm">(05)</span>
        </h3>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <ul>
        {tasks.map((task, i) => {
          const done = task.includes("(Done)");
          const taskText = task.replace(" (Done)", "");
          return (
            <li
              key={i}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 w-8 text-right select-none">{`0${
                  i + 1
                }`}</span>
                <span
                  className={`text-gray-700 ${
                    done ? "line-through text-gray-400" : ""
                  }`}
                >
                  {taskText}
                </span>
              </div>

              <CheckCircle
                className={`w-6 h-6 ${
                  done ? "text-green-500" : "text-gray-300"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
