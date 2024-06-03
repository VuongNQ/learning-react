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
    name: "Ngo Van Quốc",
    email: "ngovanquoc480@gmail.com",
    address: "89A/3a, Đường Hỉ thượng lãng ổng",
    packed: true
  },
  {
    id: 0,
    name: "Vothithuyduong",
    email: "vothithuyduong2012@gmail.com",
    address: "89A/3a, Đường Hỉ thượng lãng ổng",
    packed: false
  },
  {
    id: 0,
    name: "VanVoThuyKim",
    email: "NgoVoThuyKim185@gmail.com",
    address: "89A/3a, Đường Hỉ thượng lãng ổng",
    packed: false
  }
]
let NextId = 3;
function FormMain() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [first, setFirst] = useState('');
  const [object, setObject] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleInput = (e) => {
    setName(e.target.value)
  }
  const handleInputNum = (e) => {
    setNum(e.target.value)
  }
  const handleInputFirst = (e) => {
    setFirst(e.target.value);
  }
  const handleSend = ({ name }) => {
    setName('')
    setNum('')
    setFirst('')
    setObject([
      ...object,
      {
        id: NextId++,
        name: name,
        email: name,
        address: name,
        packed: false
      },
    ]);
  };
  const handleClose = (id) => {
    setObject(object.filter(item => item.id !== id));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <label htmlFor="">Email</label>
      <input
        type="text"
        autoComplete="off"
        value={num}
        name="Name"
        onChange={handleInputNum}
        placeholder="Name"
      />
      <input
        type="text"
        autoComplete="off"
        value={name}
        name="email"
        onChange={handleInput}
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
      <button onClick={() => handleSend({ name })} className="send" type="submit">
        SEND
      </button>
      <ul>
        {/* arrSend.map sẽ ra 1 mẫu .. và close nút X */}
        {object.map((item, id) => {
          return (
            <li className="Title" style={{ listStyle: "none"}} key={id}>
               <div className="Name-Title">
                <label className="Name" htmlFor="">
                  Name: {""}
                  <span>{item.name}</span>
                </label>
                <label className="Name" htmlFor="">
                  Email: {""}
                  <span>{item.email}</span>
                </label>
                <label className="Name"  htmlFor="">
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