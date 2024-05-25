export default function ValidationError({ object }) {
  const errors = {};
  const email_partern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  // nhập Name
  if(object.Name === "") {
    errors.name = "Name is Required"
  }
  
  if(object.Date === "") {
    errors.date = "Date is Required"
  } 
  
  if(object.Address === "") {
    errors.address = "Street is Required"
  } 

  if(object.HomeTelephone === "") {
    errors.hometelephone = "Hometelephone is Required"
  }

  if(object.Email === "") {
    errors.email = "Email is Required";
  }
   else if(!email_partern.test(object.email)) {
    errors.email = "email is not correct"
  }

  return errors;
}