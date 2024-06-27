import { useState } from 'react';
import './form.css';
import { dataList } from './data';
import TaskList from './TaskList';

const FormSection = () => {
  const [tasks, setTask] = useState(dataList);
  const [isActive1, setIsActive1] = useState(true);
  const handlechangeTask = (task : any) => {
     setTask(
      tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
     }))
  }
  
  return (
    <>
      <TaskList tasks={tasks}
      onChangeTask={handlechangeTask} item={undefined} onChange={undefined}      />
    </>

  )
};

export default FormSection;
