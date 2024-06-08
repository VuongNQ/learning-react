import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function Task() {
  function onAddTask() {
   alert('aaa')
  }

  function onEditTask () {
    alert('aaa')
  }
  function onDeleteTask() {
    alert('aaa')
  }
  return (
    <>
      <AddTask onAddTask={onAddTask} />
      <TaskList onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
    </>);
}

