import TaskItem from "./TaskItem";

const TaskList = ({ taskList, onComplete }) => {
  const renderedTasks = taskList.map((task) => {
    if (task.complete === false) {
      return <TaskItem onComplete={onComplete} key={task.id} task={task} />;
    }
    return null;
  });
  return <div>Tasks :{renderedTasks}</div>;
};

export default TaskList;
