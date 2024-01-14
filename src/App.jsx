import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./Store/CountAtom";

const App = () => {
  // let count = useRecoilValue(countAtom);
  let [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <div>Count is = {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase Value</button>
    </>
  );
};

export default App;
