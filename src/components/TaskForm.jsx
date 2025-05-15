//
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      setvalue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add your task"
        onChange={(e) => setvalue(e.target.value)}
        value={value}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
