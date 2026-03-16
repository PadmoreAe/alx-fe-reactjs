import { useState } from "react";
import useTaskStore from "../stores/useTaskStore";
import { notify } from "../stores/notify";

const TaskForm = () => {
  const [text, setText] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      notify("Task cannot be empty", "error");
      return;
    }

    addTask({ id: Date.now(), title: text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className={`p-2 rounded-md text-white ${!text.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"}`}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
