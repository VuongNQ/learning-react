/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useState, SetStateAction, useCallback } from 'react';

// eslint-disable-next-line react-refresh/only-export-components

let nextId = 0;
// eslint-disable-next-line react-refresh/only-export-components
export const initialTasks = [
  {
    id: 0,
    title: "",
    done: true
  }
]
export default function Task() {
  const [tasks, dispatch] = useReducer(initialReducer, initialTasks);
  const [text, setText] = useState({
    first: "",
  });
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  const handleOnchange = (e: {
    target: {
      name: string;
      value: SetStateAction<string>
    }
  }) => {
    setText({
      ...text,
      [e.target.name] : e.target.value
    })
  };
  {/* useCallback */ }
  { /* 
const handleSetAdd = useCallback(() => {
  setText({ first: "" });
  dispatch({
    type: "add",
    id: nextId++,
    text: first
  })
  console.log(initialReducer, initialTasks)
}, [tasks])
*/ }
const textN = text.first;
  const handleSetAdd = useCallback(() => {
    setText({ first: "" });
    dispatch({
      type: "add",
      id: nextId++,
      text: textN
    })
    console.log(initialReducer)
  },[tasks])

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
                  </span>
                  {item.id}
                  {item.title}
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