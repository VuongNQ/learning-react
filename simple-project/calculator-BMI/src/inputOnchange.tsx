import React from "react";

interface Onchange {
  name: string,
  email: string
  first: string,
  home: string,
  date: string,
  mobile: string
  handleInput?: React.ChangeEventHandler<HTMLInputElement>
  handleInputEmail?: React.ChangeEventHandler<HTMLInputElement>
  handleInputFirst?: React.ChangeEventHandler<HTMLInputElement>
  handleInputHome?: React.ChangeEventHandler<HTMLInputElement>
  handleInputDate?: React.ChangeEventHandler<HTMLInputElement>
  handleInputMobile?: React.ChangeEventHandler<HTMLInputElement>
}

function InputOnchange({
  name, email,
  first, home,
  date,
  mobile,
  handleInput,
  handleInputEmail,
  handleInputFirst,
  handleInputHome,
  handleInputDate,
  handleInputMobile
}: Onchange) {

  return (
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
  );
}

export default InputOnchange;