import { SetStateAction, useState } from "react";
import "./formMain.css";
import InputForm from "./resetInputFull";

let NextId = 1;
function FormMain() {
  const [text, setText] = useState({
    name: "",
    date: "",
    home: "",
    email: "",
    mobile: "",
    address: "",
  })
  const [arrayForm, setArrayForm] = useState<Data[]>([]);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleInput = (e: {
    target: {
      name: string; value: SetStateAction<string>
    }
  }) => {
    const name = e.target.name;
    const value = e.target.value;
    setText((prev) => {
      return { ...prev, [name]: value }
    })
  };
  const { email, name, date, home, mobile, address } = text;
  const handleSend = () => {
    setText({
      name: "",
      date: "",
      home: "",
      email: "",
      mobile: "",
      address: "",
    })
    setArrayForm(
      [...arrayForm,
      {
        id: NextId++,
        name: name,
        date: date,
        home: home,
        email: email,
        mobile: mobile,
        address: address,
      }])
  };

  const handleClose = (id: number) => {
    setArrayForm(arrayForm.filter((item) => item.id !== id));
  };
  const isDisable = arrayForm.length === 3;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <InputForm disabled={isDisable} value={text.name} type="text" onChange={handleInput} placeholder="Name" name="name" />
      <InputForm disabled={isDisable} value={text.date} type="date" onChange={handleInput} placeholder="Date" name="date" />
      <InputForm disabled={isDisable} value={text.home} type="text" onChange={handleInput} placeholder="Home" name="home" />
      <InputForm disabled={isDisable} value={text.email} type="text" onChange={handleInput} placeholder="Email" name="email" />
      <InputForm disabled={isDisable} value={text.mobile} type="text" onChange={handleInput} placeholder="Mobile" name="mobile" />
      <InputForm disabled={isDisable} value={text.address} type="text" onChange={handleInput} placeholder="Address" name="address"
      />
      <button
        disabled={text.email === "" || isDisable}
        onClick={handleSend}
        className="send"
        type="submit"
      >
        SEND
      </button>
      <ul style={{ paddingLeft: "0px", marginBottom: "-25rem" }}>
        {arrayForm.map((item, id) => {
          return (
            <li className="Title" style={{ listStyle: "none" }} key={id}>
              <div className="Name-Title" style={{ border: "1px solid black" }}>
                <div
                  className="header-name-delete"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "4px",
                  }}
                >
                  <h5 style={{ marginLeft: "12rem" }}>Infomation</h5>
                  <button
                    disabled={isDisable}
                    style={{ marginLeft: "9rem" }}
                    onClick={() => handleClose(item.id)}
                  >
                    X
                  </button>
                </div>
                <label className="Name" htmlFor="">
                  Name: {""}
                  <span>{item.name}</span>
                </label>
                <label className="Name" htmlFor="">
                  Date of Birth: {""}
                  <span>{item.date}</span>
                </label>
                <label className="Name" htmlFor="">
                  Email: {""}
                  <span>{item.email}</span>
                </label>
                <label className="Name" htmlFor="">
                  Home Telephone Number: {""}
                  <span>{item.home}</span>
                </label>
                <label className="getMobileNumber" htmlFor="">
                  Mobile Number: {""}
                  <span>{item.mobile}</span>
                </label>
                <strong>Preferred Contact Address</strong>
              </div>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default FormMain;

export interface Data {
  id: number;
  name: string;
  email: string;
  date: string;
  address: string;
  home: string;
  mobile: string;
}
