import React from "react";

function Buttons(props) {
  const { fnShowName } = props;
  console.log(props);

  return (
    <div>
      <button onClick={() => fnShowName("Luis Piedrahita")}>Click</button>
    </div>
  );
}

export default Buttons;
