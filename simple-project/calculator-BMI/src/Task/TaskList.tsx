export default function TaskList({onEditTask, onDeleteTask}) {
  return (
    <div style={{display: "flex", justifyContent: "center" }}>
      <input type="checkbox" style={{ width: "26px", display: "flex", height: "17px" }} />
      <button onClick={onEditTask}>Edit</button>
      <button onClick={onDeleteTask} >Delete  </button>
    </div>
  );
}



