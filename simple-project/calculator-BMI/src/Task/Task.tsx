/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useState, SetStateAction, useCallback } from 'react';
interface DataTs {
  id: number
  title: string
  done: boolean
}


// eslint-disable-next-line react-refresh/only-export-components

let nextId = 3;
// eslint-disable-next-line react-refresh/only-export-components
export const initialTasks: DataTs = [
  { id: 0, title: 'Visit Kafka Museum', done: true },
  { id: 1, title: 'Watch a puppet show', done: false },
  { id: 2, title: 'Lennon Wall pic', done: false },
];

export default function Task() {
  const [tasks, dispatch] = useReducer(initialReducer, initialTasks);
  const [text, setText] = useState({
    first: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleOnchange = (e: {
    target: {
      name: string;
      value: SetStateAction<string>
    }
  }) => {
    const name = e.target.name;
    const value = e.target.value;
    setText((prev) => {
      return { ...prev, [name]: value }
    })
  };
  {/* useCallback */ }
  const handleSetAdd = useCallback(() => {
    setText({ first: "" });
    dispatch({
      type: "add",
      id: nextId++,
      text: text.first
    })
    console.log(initialReducer, initialTasks)
  }, [initialReducer])


  const handleEdit = () => {

  }
  const handleDelete = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Add task */}
        <input type="text" value={text.first} onChange={handleOnchange} name="first" placeholder='first' />
        <button type='submit' onClick={handleSetAdd}>Add</button>
      </div>
      <div>
        <ul>
          {
            tasks.map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; id: any; }, index: React.Key | null | undefined) => {
              return (
                <li style={{ display: 'flex', alignItems: "center" }} key={index}>
                  <span>
                    Name: {""}
                  {item.title}
                  </span>
                  <input type="checkbox" />
                  <button onClick={handleEdit}>edit</button>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </form>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function initialReducer(tasks, action) {
  if (action.type === "add") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false
      }
    ]
  } else if (action.type === 'delete') {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}