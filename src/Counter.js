import { useMemo, useRef, useState,useCallback } from "react";

function Counter() {
  let [number, setNumber] = useState(10);

  let num = useRef(0);

  function handleClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log(number);
    num.current++;
    console.log(num.current);
  }

    const fibfx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  },[])
  const fibMemozied = useMemo(() => fibfx(number), [number, fibfx]);

  return (
    <>
      <div style={{ color: "black" }}>
        {number}||{fibMemozied}
      </div>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default Counter;
