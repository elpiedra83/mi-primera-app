import React, { useState, useEffect } from "react";

function Car() {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  useEffect(() => {
    document.title = `Coche ${started}`;
  }, [started]);

  const checkStateCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>encendido</span>;
    } else {
      if (countKm > 0) {
        setCountKm(0);
      }
      return <span style={{ color: "red" }}>apagado</span>;
    }
  };

  const increaseKm = (num) => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El coche esta apagado");
    }
  };

  return (
    <div>
      <h2>Nuestro coche esta: {checkStateCar()}</h2>
      <h2>Kilometros recorridos: {countKm} km </h2>
      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        Encender / Apagar
      </button>
      <button onClick={() => increaseKm(5)}>Aumentar Kms</button>
    </div>
  );
}

export default Car;
