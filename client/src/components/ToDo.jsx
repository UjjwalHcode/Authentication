import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../auth';

export default function ToDoDashboard() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleLogout = () => {
    clearToken();
    navigate('/');
  };

  const handleChange = (e) => setInput(e.target.value);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    setTodos(
      todos.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
            📝 To-Do Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            📕 Logout
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={handleChange}
            className="flex-grow border border-blue-400 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            ➕ Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded border border-gray-200"
            >
              <div
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : "text-gray-700"
                }`}
                onClick={() => handleComplete(index)}
              >
                {task.text}
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
