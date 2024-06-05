import { SetStateAction, useState } from "react";
import './formMain.css';
import InputDisable from "./inputDisable";
import InputOnchange from "./inputOnchange";
import { data } from "./form";
import { Data } from "./form";

let NextId = 1;
function FormMain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [arrayForm, setArrayForm] = useState(data);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value)
  }
  const handleInputEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value)
  }
  const handleInputFirst = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFirst(e.target.value);
  }
  const handleSend = ({ name, email, first }: Data) => {
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
        first: first,
        packed: true,
      },
    ]);

  };
  const ArrayForm = arrayForm.length !== 3;
  const handleClose = (id: number) => {
    setArrayForm(arrayForm.filter(item => item.id !== id));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      {
        ArrayForm ? (
          <InputOnchange
            name={name}
            handleInput={handleInput}
            email={email}
            handleInputEmail={handleInputEmail}
            first={first}
            handleInputFirst={handleInputFirst}
          />
        ) : (
          <InputDisable name={"name"} email={"email"} first={"email"} />
        )
      }
      <button disabled={email === ""} onClick={() => handleSend({ name, email, first })} className="send" type="submit">
        SEND
      </button>
      <ul>
        {
         ArrayForm ? (
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