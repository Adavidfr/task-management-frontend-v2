export default function Sidebar() {
  return (
    <aside className="w-64 bg-teal-800 text-white flex flex-col py-6 px-4 rounded-r-3xl">
      <h2 className="text-2xl font-bold mb-10 text-center">TASK MANAGEMENT</h2>
      <nav className="flex flex-col gap-6">
        <div className="bg-white/20 px-4 py-2 rounded-lg text-orange-300 font-semibold">
          DASHBOARD
        </div>
        <div className="text-gray-300">MY TASKS</div>
        <div className="text-gray-300">CALENDAR</div>
        <div className="text-gray-300">MEMBERS</div>
      </nav>
    </aside>
  );
}
