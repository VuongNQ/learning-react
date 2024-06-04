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
    name: "quoc",
    email: "ngovanquoc480@gmail.com ",
    address: "89A/3a, Đường Hải thượng lãng ông",
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
      return "Success";
    }
    if (arrayForm.length === 3) {
      return "disable"
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
      {
        arrayForm.length !== 3 ? (
          <>
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
          </>
        ) : (
          <>
            <input type="text" value={name} disabled placeholder="Name" />
            <input type="text" value={email} disabled placeholder="Address" />
            <input type="text" value={first} disabled placeholder="FirstName" />
          </>
        )
      }
      <button disabled={email === ""} onClick={() => handleSend({ name, email, first })} className="send" type="submit">
        SEND
      </button>
      <ul>
        {
          arrayForm.length !== 3 ? (
            arrayForm.map((item, id) => {
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
                </li>
              )
            })
          ) : (
            arrayForm.map((item, id) => {
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
                  <button onClick={() => handleClose(item.id)}>X</button>
                </li>
              )
            })
          )
        }
      </ul>
    </form>
  );
}

export default FormMain;