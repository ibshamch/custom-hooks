import TaskItem from "./TaskItem";

const FilterTasks = ({ filterTasks, onComplete }) => {
  const renderFilteredTasks = filterTasks.map((task) => {
    if (task.complete === true) {
      return <TaskItem onComplete={onComplete} task={task} key={task.id} />;
    }
    return null;
  });
  return (
    <div>
      Completed Tasks :
      {renderFilteredTasks.length > 0
        ? renderFilteredTasks
        : "No Task is Complete"}
    </div>
  );
};

export default FilterTasks;
