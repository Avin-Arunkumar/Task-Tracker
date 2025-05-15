import React from "react";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
          className={`cursor-pointer p-3 rounded-md shadow-sm ${
            task.completed
              ? "bg-red-100 line-through text-gray-500"
              : "bg-pink-100 hover:bg-gray-200"
          }`}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
