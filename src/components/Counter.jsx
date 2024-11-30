import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > -25) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Contador: {count}</h1>
      <div>
        <button onClick={increment} style={styles.button}>
          Incrementar
        </button>
        <button onClick={decrement} style={styles.button}>
          Decrementar
        </button>
      </div>

      {/* Indicaciones del rango */}
      <p style={styles.range}>
        Rango: de <strong>-25</strong> a <strong>25</strong>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  range: {
    fontSize: "1rem",
    color: "#cccccc",
    marginTop: "1rem",
  },
};

export default Counter;
