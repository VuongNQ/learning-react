/* eslint-disable @typescript-eslint/no-unused-vars */
/*
import { useEffect, useMemo, useState } from "react";
import "./index.css";

export const SolieuWeight: number = 40;
export const SolieuHeight: number = 150;


function App() {
  const [weight, setWeight] = useState(SolieuWeight);
  const [height, setHeight] = useState(SolieuHeight);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onWeightChange = (e: { target: { value: any; }; }) => {
    const tarGetWeight = e.target.value;
    setWeight(tarGetWeight);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onHeightChange = (e: { target: { value: any; }; }) => {
    const tarGetHeight = e.target.value;
    setHeight(tarGetHeight)
  }
  // Công thức tính BMI nặng / chiều cao bình phương
  //BMI từ 18,5 den 24,9 bình thường
  //BMI tu 25 den 30 là thừa cân 
  // Nếu tính độ chuẩn của BMI thì vd: 1m72 (lấy 72 nhân với 9 chia  cho 10)
  // => 1 người bình thường không chơi thể thao .
  const Memo = useMemo(() => {
    const total = height / 100;
    return (weight / (total * total)).toFixed(1);
  }, [weight, height]);
  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-weight"  >
        {/* State sẽ thay đổi khi lướt qua */
/*
<p style={{ textAlign: "left" }}>Weight: {weight} kg</p>
<input
  style={{ width: "150%" }}
  type="range"
  step="1"
  min="40"
  max="220"
  onChange={onWeightChange}
/>
<p style={{ textAlign: "left" }}>Height: {height} cm</p>
<input
  style={{ width: "150%" }}
  type="range"
  step="1"
  min="40"
  max="220"
  onChange={onHeightChange}
/>
</div>
<div className="footer">
<h4>Your BMI is</h4>
<button>{Memo}</button>
</div>
</main>
);
}

export default App;
*/

import { useState } from "react";
import { UseEffectName } from "./DemoEffect";

function DemoUseEffect() {
  const [index, setIndex] = useState(0);
  const [folder, setFolder] = useState(false);
  const StateList = index < UseEffectName.length - 1;
  const handleClickNext = () => {
    if (StateList) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  const handleShowDetails = () => {
    setFolder(!folder)
  }
  const UseEffect = UseEffectName[index];
  console.log(UseEffect)
  return (
    <div>
      <button onClick={handleClickNext} >Next</button>
      <h2 style={{ display: "flex", alignItems: "center" }}>
        <i>{UseEffect.name} </i>
        by
        <h3> {UseEffect.artist}</h3>
      </h2>
      <button onClick={handleShowDetails} >
        {folder ? "hide" : "show"} details
      </button>
      {folder && <h2>{UseEffect.description}</h2>}
      <img src={UseEffect.url} alt="hinh anh" />
    </div>
  );
}

export default DemoUseEffect;