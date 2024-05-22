/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./formMain.css";

interface FormTs {
  Name: string,
  Email: string,
  HomeTelephone: string
}

const Name: FormTs = {
  Name: "",
  Email: "",
  HomeTelephone: "",
}
function FormMani() {
  const [arrSend, setArrSend] = useState([]);
  const [answer, setAnswer] = useState(Name);
  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  const { name, Email, HomeTelephone } = answer;
  console.log(Name);
  const handleSend = () => {
    setArrSend([...arrSend, { Name, Email, HomeTelephone }])
    console.log(arrSend)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <input type="text" autoComplete="off" value={answer.Name} name="Name" onChange={handleInput} placeholder="Name" />
      <input type="text" autoComplete="off" value={answer.Email} name="Email" onChange={handleInput} placeholder="Email" />
      <input type="text" autoComplete="off" value={answer.HomeTelephone} name="HomeTelephone" onChange={handleInput} placeholder="HomeTelephone" />
      <button onClick={handleSend} className="send" type="submit">
        SEND
      </button>
      {/* arrSend.map sẽ ra 1 mẫu .. và close nút X */}
       <div style={{ border: "1px solid black", marginTop: "2rem", borderRadius: "8px"}} >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}} className="title-close">
        <h2 style={{ textAlign: "center" }} >Information</h2>
        <button style={{ position: "absolute", right: "3px"}} >X</button>
        </div>
         <ul style={{ listStyle: "none", marginRight: "24rem" }}>
          <li>Name: </li>
          <li>Date of Birth: </li>
          <li>Address: </li>
          <li>Gender: </li>
          <li>Home Telephone Number: </li>
          <li>Mobile Number: </li>
          <li>Preferred Contact Address </li>
         </ul>
       </div>

    </form>
  );
}

export default FormMani;
