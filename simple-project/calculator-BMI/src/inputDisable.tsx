interface data {
  name: string
  email: string
  first: string
}

function InputDisable({name,email,first} : data) {
  return ( 
    <>
    <input type="text" value={name} disabled placeholder="name" />
    <input type="text" value={email} disabled placeholder="email" />
    <input type="text" value={first} disabled  placeholder="first"/>
    </>
   );
}

export default InputDisable;