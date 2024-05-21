const TaskItem = ({ task, onComplete }) => {
  const { taskTitle, description, id, complete } = task;
  const handleTaskCompletion = () => {
    onComplete(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "black 2px solid",
        marginTop: "20px",
      }}
    >
      <div>Title : {taskTitle}</div>
      <div>Description : {description}</div>
      <button onClick={complete ? null : handleTaskCompletion}>
        {complete ? "This Task is Completed" : "Mark Task as Completed"}
      </button>
    </div>
  );
};

export default TaskItem;
