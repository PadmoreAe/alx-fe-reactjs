import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    return (
      <div style={{paddingLeft: 20, paddingTop: 20, paddingBottom: 30,}}>
        <p>Current Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
}

export default Counter