import { data } from "./form";

export default function RenderResultForm() {
  const dataLet = data;
  return (
    <>
      {
        dataLet.map((item, id) => {
          return (
            <li className="Title" style={{ listStyle: "none" }} key={id}>
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
              </div>
            </li>
          )
        })
      }
    </>
  );
}

