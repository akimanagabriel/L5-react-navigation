import React, { useState } from "react";

function Info() {
  const [number, setNumber] = useState(4);
  return (
    <div>
      <h1>Multiplication table</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <br />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
        return (
          <p key={i}>
            {number} x {i} = {number * i}
          </p>
        );
      })}
    </div>
  );
}

export default Info;
