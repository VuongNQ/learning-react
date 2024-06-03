import { useState } from "react";

//Tránh trạng thái dư thừa
function BaiTapState2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // đây là cách giải quyết dư thừa
  const fullName = firstName + " " + lastName;
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastName = (e) => {
    setLastName(e.taget.value)
  }
  return ( 
       <form>
          <h2>Let's check you in</h2>
          <label htmlFor="">
            First Name:
            <input type="text" onChange={handleFirstName} value={firstName}/>
          </label>
          <label htmlFor="">
            Last Name: 
            <input value={lastName} onChange={handleLastName} type="text" />
          </label>
          <h2>Your ticket will be issused to:{fullName} </h2>
       </form>
   );
}

export default BaiTapState2;