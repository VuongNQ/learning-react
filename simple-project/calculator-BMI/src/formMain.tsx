import { SetStateAction, useState } from "react";
import { data, Data } from "./form";
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
  const handleSend = ({ name, email, first, home, date, mobile }: Data) => {
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
              value={date}
              name="Name"
              onChange={handleInputDate}
              placeholder="Date of Birth"
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
            <input
              type="text"
              autoComplete="off"
              value={home}
              name="home"
              onChange={handleInputHome}
              placeholder="Home Telephone Number"
            />
            <input
              type="text"
              autoComplete="off"
              value={mobile}
              name="home"
              onChange={handleInputMobile}
              placeholder="Mobile Number"
            />
          </>
        ) : (
          <>
          <input type="text" value={name} disabled placeholder="name" />
          <input type="text" value={email} disabled placeholder="email" />
          <input type="text" value={first} disabled  placeholder="first"/>
          </>
        )
      }
      <button disabled={email === ""}
        onClick={() => handleSend({ name, email, first, home, date, mobile })}
        className="send" type="submit">
        SEND
      </button>
      <ul style={{ paddingLeft: "0px"}}>
        {
          isArrayForm ? (
            <>
            {
              arrayForm.map((item, id) => {
                return (
                  <li className="Title" style={{ listStyle: "none", border: "1px solid black", borderRadius: "6px" , marginBottom: "2rem"}} key={id}>
                    <div className="Name-Title">
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
                      <label className="getHomeTelephone" htmlFor="">
                        Home Telephone Number: {""}
                        <span>{item.home}</span>
                      </label>
                      <label className="getMobileNumber" htmlFor="">
                        Mobile Number: {""}
                        <span>{item.address}</span>
                      </label>
                      <strong>Preferred Contact Address</strong>
                    </div>
                  </li>
                )
              })
            }
          </>
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
                    <strong>Preferred Contact Address</strong>
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