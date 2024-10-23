import { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Todolist</h2>
      <Create />
      <div className="mt-8">
        {todos.length === 0 ? (
          <h2 className="text-lg text-gray-500 text-center">No todos</h2>
        ) : (
          todos.map((todo) => (
            <h2 key={todo._id} className="text-lg text-gray-800">
              {todo.task}
            </h2>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
