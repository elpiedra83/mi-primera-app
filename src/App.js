import React from "react";
// import ListUsers from "./components/ListUsers";
// import Buttons from "./components/Buttons";
// import style from "./App.css";
// import { ReactComponent as ReactLogo } from "./assets/logo.svg";
import Car from "./components/Car";

function App() {
  // const users = [
  //   { name: "Luis Piedrahita", years: 37 },
  //   { name: "Ezequiel Echeverri", years: 30 },
  //   { name: "El Padre", years: 33 },
  // ];
  // const showNameConsole = (name) => {
  //   console.log(name);
  // };
  // return (
  //   <div className="App">
  //     <h1>Mi App</h1>
  //     {/* <ReactLogo style={{ width: 100, height: 100 }} /> */}
  //     {/* <ListUsers listUsers={users} /> */}
  //     {/* <Buttons fnShowName={showNameConsole} /> */}
  //   </div>
  // );

  return (
    <div>
      <h1>React Hook useState</h1>
      <Car />
    </div>
  );
}

export default App;
