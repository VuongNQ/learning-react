
//sua thanh phan khong cap nhat
import { useEffect, useState } from "react";
import "./formMain.css";

export function useTime() {
  const [date,setDate] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    },1000)
    return () => clearInterval(id);
  },[]);
  return date;
}

function Challenges1() {
  const time = useTime();
  const timeOut = time.toLocaleTimeString();
   const [color, setColor] = useState('lightCoral')
   const handleColor = (e) => {
      setColor(e.target.value)
   }

   return (
    <div>
      <h4>Pick a color </h4>
      <select value={color} onChange={handleColor} className="selectColor" >
        <option value="lightCoral" >lightCoral</option>
        <option value="midnightblue" >midnightblue</option>
        <option value="rebeccapurple" >rebeccapurple</option>
      </select>
      <h1 style={{color}} >
           {timeOut}
      </h1>
    </div>
  );
}

export default Challenges1;