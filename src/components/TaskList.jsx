import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-3 rounded-md shadow-sm ${
            task.completed
              ? "bg-green-100 line-through text-gray-500"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <span
            onClick={() => toggleTask(task.id)}
            className="flex-1 cursor-pointer"
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="ml-4 text-red-500 hover:text-red-700 font-bold text-lg"
            title="Delete Task"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
