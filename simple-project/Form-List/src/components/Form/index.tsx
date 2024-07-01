import { useState } from "react";
import { dataList } from "./mockup";
import "./form.css";
import TaskList from "./TaskList";

const FormSection = () => {
  const [tasks, setTask] = useState(dataList);
  const handlechangeTask = (task: any) => {
    setTask(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  return (
    <TaskList
      tasks={tasks}
      onChangeTask={handlechangeTask}
      item={undefined}
      onChange={undefined}
    />
  );
};

export default FormSection;
