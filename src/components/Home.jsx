import React, { useState } from "react";

function Home() {
  //   var count = 0;
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nobis
        repellendus aliquid non error eaque officiis quae dicta quod. Animi
        nostrum dicta excepturi cum blanditiis iure repellendus tempore,
        distinctio ullam.
      </p>

      <p>
        count : {count}
        <button
          onClick={function () {
            setCount((pv) => pv + 10);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}

export default Home;
