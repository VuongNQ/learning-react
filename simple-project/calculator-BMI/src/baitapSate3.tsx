//Tránh trùng lặp về trạng thái khi dữ liệu là array vs object

import { useState } from "react";

export interface DataTs {
  id: number
  title: string
}

export const initialItems: DataTs[] = [
  {
    id: 0,
    title: "prezels"
  },
  {
    id: 1,
    title: "crispy seaweed"
  },
  {
    id: 2,
    title: "granola bar"
  },
]
//nhắc tên mảng bao object thì find để k bị trùng lặp dữ liệu

function BaiTapState3() {
  const [items, setItems] = useState(initialItems);
  const [selectItem, setSelectItems] = useState(0);
  const selectItemId = items.find(item =>
    item.id === selectItem
  )
  const handleInputOnchange = (id, e) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        }
      } else {
        return item;
      }
    }))
  }
  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {
          items.map((item, index) => {
            return (
              <div key={index}>
                <li >
                  <input onChange={e => handleInputOnchange(item.id, e)} type="text" value={item.title} name="" id="" />
                </li>
                <button onClick={() => setSelectItems(item.id)}>Choose</button>
              </div>
            )
          })
        }
      </ul>
      <h2>You picked pretzels  {selectItemId?.title}</h2>
    </div>
  );
}

export default BaiTapState3;