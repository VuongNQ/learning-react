import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

interface Data {
  id: number
  title: string
  done: boolean
}

export const GetData : Data[] = [
  {
    id: 0,
    title: "Ngô Văn Quốc",
    done: true
  },
  {
    id: 1,
    title: "Võ Thị Thuỳ Dương",
    done: false
  },
  {
    id: 2,
    title: "Võ Thị Thuỳ Kim",
    done: false
  },
]

export default function Task() {
  function onAddTask() {
    alert('aaa')
  }

  function onEditTask() {
    alert('aaa')
  }
  function onDeleteTask() {
    alert('aaa')
  }
  return (
    <>
      <AddTask onAddTask={onAddTask} />
      <TaskList
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask} />
    </>);
}

