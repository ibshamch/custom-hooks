import { useState } from "react";

const TaskForm = ({ onHandleTaskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    const taskData = {
      taskTitle,
      description,
      complete: false,
      id: Math.floor(Math.random() * 44449999),
    };
    onHandleTaskList(taskData);
    setTaskTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={handleSubmission}>
        <label>
          Title :
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </label>
        <label>
          Description :
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
