import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterTasks from "./components/FilterTasks";
import useTaskManager from "./hooks/use-task-manager";

function App() {
  const { handleFilterCompletedTasks, handleTaskList, taskList } =
    useTaskManager();

  return (
    <div>
      <TaskForm onHandleTaskList={handleTaskList} />
      <TaskList taskList={taskList} onComplete={handleFilterCompletedTasks} />
      <FilterTasks
        filterTasks={taskList}
        onComplete={handleFilterCompletedTasks}
      />
    </div>
  );
}

export default App;
