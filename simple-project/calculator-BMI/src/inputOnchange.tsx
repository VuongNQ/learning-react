import React from "react";

interface Onchange {
  name: string,
  email: string
  first: string
  handleInput?: React.ChangeEventHandler<HTMLInputElement>
  handleInputEmail?: React.ChangeEventHandler<HTMLInputElement>
  handleInputFirst?: React.ChangeEventHandler<HTMLInputElement>
 }

function InputOnchange({
    name, email,
    first,
    handleInput,
    handleInputEmail,
    handleInputFirst  
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
  );
}

export default InputOnchange;