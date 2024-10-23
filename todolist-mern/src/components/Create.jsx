import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center space-x-4 mt-6 shadow-lg p-4 bg-white rounded-md">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 transition-all duration-200"
      >
        Create
      </button>
    </div>
  );
};

export default Create;
