import { useEffect, useState } from "react";

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(
    () => {
      console.log("UseEffect2 Ran");
      if (toggleTwo) {
        console.log("toggleTwo slice of state is true so this code runs");
      }
    },
    [toggleTwo],

    useEffect(() => {
      setInterval(() => {
        console.log(`UseEffect3 with interval number ${count} is running`);
      }, 1000);
      return () => {
        console.log(
          `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
        );
        clearInterval(count);
      };
    }, [count])
  );

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(count++)}>Count {count} </button>
    </div>
  );
};

export default UseEffectTest;

// WIP
