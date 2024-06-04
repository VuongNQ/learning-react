import { useState } from "react";
import './formMain.css';

interface Data {
  id: number
  name: string
  email: string
  address: string
  packed: boolean
}

export const data: Data[] = [
  {
    id: 0,
    name: "",
    email: "",
    address: "",
    packed: false
  },
]
let NextId = 1;
function FormMain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [arrayForm, setArrayForm] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleInput = (e) => {
    setName(e.target.value)
  }
  const handleInputEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleInputFirst = (e) => {
    setFirst(e.target.value);
  }
  const handleSend = ({ name, email, first }) => {
    setName('');
    setEmail('');
    setFirst('');
    if (email === "") {
      return "Succes";
    }
    setArrayForm([
      ...arrayForm,
      {
        id: NextId++,
        name: name,
        email: email,
        address: first,
        packed: true,
      },
    ]);

  };
  const handleClose = (id) => {
    setArrayForm(arrayForm.filter(item => item.id !== id));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <label htmlFor="">Email</label>
      <input
        type="text"
        autoComplete="off"
        value={name}
        name="Name"
        onChange={handleInput}
        placeholder="Name"
      />
      <input
        type="text"
        autoComplete="off"
        value={email}
        name="email"
        onChange={handleInputEmail}
        placeholder="Email"
      />

      <input
        type="text"
        autoComplete="off"
        value={first}
        name="FirstName"
        onChange={handleInputFirst}
        placeholder="Address"
      />
      <button disabled={email === ""} onClick={() => handleSend({ name, email, first })} className="send" type="submit">
        SEND
      </button>
      <ul>
        {/* arrSend.map sẽ ra 1 mẫu .. và close nút X */}
        {arrayForm.map((item, id) => {
          return (
            <li className="Title" style={{ listStyle: "none" }} key={id}>
              <div className="Name-Title">
                <label className="Name" htmlFor="">
                  Name: {""}
                  <span>{item.name}</span>
                </label>
                <label className="Name" htmlFor="">
                  Email: {""}
                  <span>{item.email}</span>
                </label>
                <label className="Name" htmlFor="">
                  Address: {""}
                  <span>{item.address}</span>
                </label>
              </div>
              <button onClick={() => handleClose(item.id)} >X</button>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default FormMain;