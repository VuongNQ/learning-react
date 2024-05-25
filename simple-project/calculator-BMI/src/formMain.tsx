import { useState } from "react";
import './formMain.css';
import ValidationError from "./validationError";
function FormMain() {
  const [arrSend, setArrSend] = useState([]);
  const [validationerr, setValidationerr] = useState({});
  const [object, setObject] = useState({
    id: 0,
    Name: "",
    Date: "",
    email: "",
    Address: "",
    HomeTelephone: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationerr(ValidationError({ object }));
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setObject({ ...object, [name]: value })
  }

  const handleSend = () => {
    const { Address, Date, Email, HomeTelephone } = object;
    setArrSend([...arrSend, { Address, Date, Email, HomeTelephone }],);
    console.log(arrSend);
  };
  const handleClose = () => {
    setArrSend([])
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Information Form</h1>
      <label htmlFor="">Name</label>
      <input
        type="text"
        autoComplete="off"
        value={object.Name}
        name="Name"
        onChange={handleInput}
        placeholder="Name"
      />
      {validationerr.name && <span style={{ color: "red" }} className="error">{validationerr.name}</span>}
      <label htmlFor="">Date of Birth</label>
      <input
        type="text"
        autoComplete="off"
        value={object.Date}
        name="Date"
        onChange={handleInput}
        placeholder="date"
      />
      {validationerr.date && <span style={{ color: "red" }} className="error">{validationerr.date}</span>}


      <label htmlFor="">Email</label>
      <input
        type="text"
        autoComplete="off"
        value={object.Email}
        name="email"
        onChange={handleInput}
        placeholder="Email"
      />
      {validationerr.email && <span style={{ color: "red" }} className="error">{validationerr.email}</span>}
      <label htmlFor="">Address</label>
      <input
        type="text"
        autoComplete="off"
        value={object.Address}
        name="Address"
        onChange={handleInput}
        placeholder="Street Address"
      />
      { validationerr.address && <span style={{color: "red"}} className="error">{validationerr.address}</span> }
      <label htmlFor="">Home Telephone Number</label>
      <input
        type="text"
        autoComplete="off"
        value={object.HomeTelephone}
        name="HomeTelephone"
        onChange={handleInput}
        placeholder="HomeTelephone"
      />
      {validationerr.hometelephone && <span style={{ color: "red" }} className="error">{validationerr.hometelephone}</span>}
      <button onClick={handleSend} className="send" type="submit">
        SEND
      </button>
      {/* arrSend.map sẽ ra 1 mẫu .. và close nút X */}
      {arrSend.map((item) => {
        return (
          <div
            style={{
              border: "1px solid black",
              marginTop: "2rem",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              className="title-close"
            >
              <h2 style={{ textAlign: "center" }}>Information</h2>
              <button
                onClick={handleClose}
                style={{ position: "absolute", right: "3px" }}
              >
                X
              </button>
            </div>
            <ul style={{ listStyle: "none", marginRight: "24rem" }}>
              <li>Name: {item.name}</li>
              <li>Date of Birth: {item.Date}</li>
              <li>Email: {item.Email}</li>
              <li>Email: {item.Address}</li>
              <li>Gender: </li>
              <li>Home Telephone Number: {item.HomeTelephone} </li>
              <li>Mobile Number: </li>
              <li>Preferred Contact Address </li>
            </ul>
          </div>
        );
      })}
    </form>
  );
}

export default FormMain;