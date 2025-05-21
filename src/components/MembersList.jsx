import React from "react";

const members = [
  {
    name: "John Doe",
    message: "Hi Angelina! How are you?",
    avatar: "https://i.pravatar.cc/150?img=1",
    bg: "bg-red-100",
  },
  {
    name: "Courtney Henry",
    message: "Do you need that design?",
    avatar: "https://i.pravatar.cc/150?img=2",
    bg: "bg-orange-100",
  },
  {
    name: "Jerome Bell",
    message: "What is the price of hourly...",
    avatar: "https://i.pravatar.cc/150?img=3",
    bg: "bg-cyan-100",
  },
  {
    name: "Arlene McCoy",
    message: "Awesome!!",
    avatar: "https://i.pravatar.cc/150?img=4",
    bg: "bg-purple-100",
  },
];

const MembersList = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Members</h2>
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-center space-x-4"
          >
            <div
              className={`w-12 h-12 rounded-full p-1 ${member.bg} flex-shrink-0`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-gray-500 text-sm truncate max-w-[200px]">
                {member.message}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MembersList;
