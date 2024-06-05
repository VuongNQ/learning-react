import { data } from "./form";
function ArrayForm1() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    data.map((item, id) => {
      return (
        <li className="Title" style={{ listStyle: "none" }} key={id}>
          <div className="Name-Title">
            <label className="Name" htmlFor="">
              Name: {""}
              <span>{item.name}</span>
            </label>
            <label className="Name" htmlFor="">
              Email: {""}
              <span>{item.email}</span>
            </label>
            <label className="Name" htmlFor="">
              Address: {""}
              <span>{item.address}</span>
            </label>
          </div>
        </li>
      )
    })
  );
}

export default ArrayForm1;