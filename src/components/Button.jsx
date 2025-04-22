import { useState } from "react";
import "../App.css";

function Button({ removeBtn, id }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <button className="buttonMain button" onClick={() => removeBtn(id)}>
        Remove
      </button>
    </>
  );
}

export default Button;
