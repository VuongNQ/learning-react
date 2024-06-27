import { Key, useState } from "react";

interface TaskTs {
  tasks: any
  onChangeTask: any
  item: any
  onChange: any
}

export default function TaskList({ tasks, onChangeTask }: TaskTs) {
  return (
    <>
      <div className="container">
        <div className="row">
          {
            tasks.map((item: { id: Key | null | undefined; }) => {
              return (
                <div className="col" key={item.id} >
                  <Task item={item} onChange={onChangeTask} tasks={undefined} onChangeTask={undefined} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

function Task({ item, onChange }: TaskTs) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCancel, setIsCancel] = useState(true)
  let taskContent;
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }
  const onMouseHover = () => {
    setIsActive(true)
  }
  const onMouseLeave = () => {
    setIsActive(false)
  }
  const cancel =
  (
    isActive ? 
      <button className="cancel" onClick={() => setIsCancel(false)}>Cancel</button>
       : null
  )
  const textList =
    (
      isActive ?
        <button className="edit" onClick={() => setIsEditing(true)} >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        : null
    )
  if (isEditing) {
    taskContent = (
      <>
        <div className="titleName">
          Title:
          <input type="text" value={item.title} onChange={(e) => {
            onChange({
              ...item,
              title: e.target.value
            })
          }} />
          <br />
          Email:
          <input type="text" value={item.email} onChange={(e) => {
            onChange({
              ...item,
              email: e.target.value
            })
          }} />
          Address:
          <input type="text" value={item.address} onChange={(e) => {
            onChange({
              ...item,
              address: e.target.value
            })
          }} />
          Home:
          <input type="text" value={item.home} onChange={(e) => {
            onChange({
              ...item,
              home: e.target.value
            })
          }} />
          Date:
          <input type="text" value={item.date} onChange={(e) => {
            onChange({
              ...item,
              date: e.target.value
            })
          }} />
          Mobile:
          <input type="text" value={item.mobile} onChange={(e) => {
            onChange({
              ...item,
              mobile: e.target.value
            })
          }} />
          {cancel}
        </div>
      </>
    )
  } else {
    taskContent = (
      <>
        <div className="titleName" onMouseEnter={onMouseHover}
          onMouseLeave={onMouseLeave}
        >
          <strong>Form Information</strong>
          {/* Edit */}
          {textList}
          <span>
            Title: {" "}
            {item.title}
          </span>
          <br />
          <span>
            Email: {" "}
            {item.email}
          </span>
          <br />
          <span>
            Address: {" "}
            {item.address}
          </span>
          <br />
          <span>
            Home: {" "}
            {item.home}
          </span>
          <br />
          <span>
            Date: {" "}
            {item.date}
          </span>
          <br />
          <span>
            Mobile: {" "}
            {item.mobile}
          </span>
        </div>
      </>
    )
  }
  const save = <button className="save" onClick={() => setIsEditing(false)}>Save</button>
  return (
    <form onSubmit={handleSubmit}>
      <label className="label" onMouseEnter={onMouseHover} >
        {taskContent}
        {/* save */}
        {save}
      </label>
    </form>
  )
}
