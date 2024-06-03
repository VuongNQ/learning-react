// Sua danh sach bi dong goi có phần chân trang chưa hiển
// thị số lượng mặt hàng được đóng gói và tổng cộng có bao
// nhiêu mặt hàng.

import { SetStateAction, useState } from "react";

export interface Items {
  id: number
  title: string
  packed: boolean
}

let NextId = 3;
export const initiaItems: Items[] = [
  {
    id:0,
    title: "Warm socks",
    packed: true
  },
  {
    id:1,
    title: "Travel journal",
    packed: false
  },
  {
    id:2,
    title: "Watercolors",
    packed: false
  },
]

function Challenges2() {
  const [title,setTitle] = useState('');
  const [dataAnSwer, setDataAnSwer] = useState(initiaItems);
  //khi click vao add thi se đếm lên cuối
  const total = dataAnSwer.length;
  //khi lick vào add chỗ đầu tiên đếm ngược đầu
  const packed = dataAnSwer.filter(item1 => item1.packed).length;
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }
  const handleChangeInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value)
  }
  const handleChangeAdd = ({title}) => {
    setTitle('');
    setDataAnSwer([
      ...dataAnSwer,
      {
        id: NextId++,
        title: title,
        packed: false
      }
    ])
  }
  const handleChangeRemove = (id) => {
    setDataAnSwer(dataAnSwer.filter(item => item.id !== id));
  }
  return (
    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
      <input value={title} onChange={handleChangeInput} type="text" placeholder="Add item" />
      <button onClick={handleChangeAdd}>Add</button>
      <ul>
        {
          dataAnSwer.map((item,id) => {
            return (
              <li key={id}>
                 <label htmlFor="">
                  <input type="checkbox"  />
                  {""}
                  {item.title}
                 </label>
                 <button onClick={() => handleChangeRemove(item.id)} >Delete</button>
              </li>
            )
          })
        }
      </ul>
      <br />
      <h5>{packed} out of {total}</h5>
    </form>
  );
}

export default Challenges2;