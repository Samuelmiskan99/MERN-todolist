import { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoColorFillOutline } from "react-icons/io5";
import { IoColorFill } from "react-icons/io5";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
        Todolist
      </h2>

      {/* Create Task Section */}
      <Create />

      {/* Tasks List */}
      <div className="mt-8">
        {todos.length === 0 ? (
          <div className="text-center mt-6">
            <h2 className="text-xl text-gray-500">
              No tasks yet. Add your first task!
            </h2>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo._id}
                className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between transition-transform transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div onClick={() => handleEdit(todo._id)}>
                    {todo.done === true ? (
                      <IoColorFill className=" text-2xl mr-4" />
                    ) : (
                      <IoColorFillOutline className=" text-2xl mr-4" />
                    )}
                  </div>
                  <span className="text-lg text-gray-800">
                    <p
                      className={
                        todo.done
                          ? "text-decoration-line: line-through font-semibod"
                          : ""
                      }
                    >
                      {todo.task}
                    </p>
                  </span>
                </div>

                <FaRegTrashAlt
                  className=" text-red-500 text-2xl ml-4 cursor-pointer hover:text-red-600"
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
