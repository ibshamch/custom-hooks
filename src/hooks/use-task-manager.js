import { useState } from "react";

function useTaskManager() {
  const [taskList, setTaskList] = useState([]);

  function handleTaskList(taskData) {
    setTaskList([...taskList, taskData]);
  }

  function handleFilterCompletedTasks(taskId) {
    const updatedTaskList = taskList.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          complete: true,
        };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  }

  return {
    taskList,
    handleFilterCompletedTasks,
    handleTaskList,
  };
}
export default useTaskManager;
