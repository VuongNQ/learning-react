import { useState } from "react";
import { UseEffectName } from "./DemoEffect";

function DemoUseEffect() {
  const [index, setIndex] = useState(0);
  const StateList = index < UseEffectName.length - 1;
  const handleClickNext = () => {
    if (StateList) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  const useEffectHook = UseEffectName[index];
  return (
    <div>
      <button onClick={handleClickNext}>Next</button>
      <h2>
        <i>{useEffectHook.name}</i>
        by
        <h3>
          {useEffectHook.artist}
        </h3>
      </h2>
      <button>Show details</button>
      <img src="" alt="hinh anh" />
    </div>
  );
}

export default DemoUseEffect;