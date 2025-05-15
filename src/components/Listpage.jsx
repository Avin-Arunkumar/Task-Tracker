import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Listpage = () => {
  const [task, setTask] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTask([...task, newTask]);
  };

  const toggleTask = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTask(task.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-200 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Task Manager
      </h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p className="mt-4 text-center text-gray-600">
        Total Tasks: {task.length}
      </p>
    </div>
  );
};

export default Listpage;
