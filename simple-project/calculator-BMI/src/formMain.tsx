import { SetStateAction, useState } from "react";
import "./formMain.css";
import ResetInputFull from "./resetInputFull";

let NextId = 1;
function FormMain() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [home, setHome] = useState("");
  const [date, setDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [arrayForm, setArrayForm] = useState<Data[]>([]);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };
  const handleInputDate = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDate(e.target.value);
  };
  const handleInputEmail = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handleInputAddress = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setAddress(e.target.value);
  };
  const handleInputHome = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setHome(e.target.value);
  };
  const handleInputMobile = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMobile(e.target.value);
  };
  const handleSend = ({ name, email, address, home, date, mobile }: Data) => {
    setName("");
    setEmail("");
    setAddress("");
    setHome("");
    setDate("");
    setMobile("");
    setArrayForm([
      ...arrayForm,
      {
        id: NextId++,
        name: name,
        email: email,
        address: address,
        date: date,
        home: home,
        mobile: mobile,
      },
    ]);
  };

  const handleClose = (id: number) => {
    setArrayForm(arrayForm.filter((item) => item.id !== id));
  };
  const isDisable = arrayForm.length === 3;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <ResetInputFull
        disabled={isDisable}
        name={name}
        date={date}
        address={address}
        email={email}
        home={home}
        mobile={mobile}
        handleInput={handleInput}
        handleInputEmail={handleInputEmail}
        handleInputDate={handleInputDate}
        handleInputHome={handleInputHome}
        handleInputMobile={handleInputMobile}
        handleInputAddress={handleInputAddress}
      />
      <button
        disabled={email === "" || isDisable}
        onClick={() =>
          handleSend({ id: 1, name, email, address, home, date, mobile })
        }
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
