import { Key, useState } from "react";
import './form.css'

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
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id} >
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
  const [style, setStyle] = useState({ display: 'none' });
  const save =
    (
      !isActive ?
        <button className="save" onClick={() => setIsEditing(false)}>Save</button> : null
    )
  const cancel =
    (
      !isActive ?
        <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
        : null
    )
  return (
    <div className="label"
      onMouseEnter={e => {
        setStyle({ display: 'block' });
      }}
      onMouseLeave={e => {
        setStyle({ display: 'none' })
      }}
    >
      {isEditing ? (
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
          {/* save and cancel */}
          {cancel}
          {save}
        </div>
      ) : (
        <div className="titleName">
          <strong>Form Information</strong>
          {/* Edit */}
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
      )}
      {/* save */}
      <button className="edit" style={style} onClick={() => setIsEditing(true)} >
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  )
}
