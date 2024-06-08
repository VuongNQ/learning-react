import { SetStateAction, useState } from "react";
import { data, Data } from "./form";
import InputDisable from "./inputDisable";
import InputOnchange from "./inputOnchange";
import RenderResultForm from "./renderResultForm";
import './formMain.css';

let NextId = 1;
function FormMain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [home, setHome] = useState('');
  const [date, setDate] = useState('');
  const [mobile, setMobile] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [arrayForm, setArrayForm] = useState(data);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value)
  }
  const handleInputDate = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDate(e.target.value)
  }
  const handleInputEmail = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value)
  }
  const handleInputFirst = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFirst(e.target.value);
  }
  const handleInputHome = (e: { target: { value: SetStateAction<string>; }; }) => {
    setHome(e.target.value);
  }
  const handleInputMobile = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMobile(e.target.value);
  }
  const handleSend = ({ name, email, first, home,date,mobile }: Data) => {
    setName('');
    setEmail('');
    setFirst('');
    setHome('');
    setDate('');
    setMobile('');
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
        date: date,
        home: home,
        mobile: mobile,
        packed: true,
      },
    ]);

  };
  const isArrayForm = arrayForm.length !== 3;
  const handleClose = (id: number) => {
    setArrayForm(arrayForm.filter(item => item.id !== id));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      {
        isArrayForm ? (
          <InputOnchange
            name={name}
            handleInput={handleInput}
            email={email}
            handleInputEmail={handleInputEmail}
            first={first}
            handleInputFirst={handleInputFirst}
            home={home}
            handleInputHome={handleInputHome}
            date={date}
            handleInputDate={handleInputDate}
            mobile={mobile}
            handleInputMobile={handleInputMobile}
          />
        ) : (
          <InputDisable name={"name"} email={"email"} first={"email"} />
        )
      }
      <button disabled={email === ""}
        onClick={() => handleSend({ name, email, first, home, date,mobile })}
        className="send" type="submit">
        SEND
      </button>
      <ul>
        {
          isActive ? (
            <RenderResultForm />
          ) : (
            arrayForm.map((item, id) => {
              return (
                <li className="Title" style={{ listStyle: "none" }} key={id}>
                  <div className="Name-Title" style={{ border: "1px solid black" }}>
                    <div className="header-name-delete" style={{ display: "flex", justifyContent: "space-between", borderRadius: "4px" }} >
                      <h5 style={{ marginLeft: "12rem" }}>Infomation</h5>
                      <button style={{ marginLeft: "9rem" }} onClick={() => handleClose(item.id)}>X</button>
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
                      Address: {""}
                      <span>{item.address}</span>
                    </label>
                    <label className="Name" htmlFor="">
                      Home Telephone Number: {""}
                      <span>{item.home}</span>
                    </label>
                    <label className="getMobileNumber" htmlFor="">
                      Mobile Number: {""}
                      <span>{item.mobile}</span>
                    </label>
                  </div>
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