import Button from "./Button";
import Toggle from "./Toggle";
import { useState } from "react";
import "../App.css";

function Card({
  updateItem,
  idNum,
  img,
  name,
  description,
  status,
  removeBtn,
  changeData,

  // onClick,
}) {
  // const [count, setCount] = useState(0)
  // console.log(img);
  const [checked, setChecked] = useState(false);

  const handleChangeToggle = (nextChecked) => {
    changeData(idNum, nextChecked);
    setChecked(nextChecked);
    console.log(setChecked);
    console.log(checked);
  };

  return (
    <>
      <div className="card">
        <div className="firstPart">
          {" "}
          <div className="image-Wrap">
            <img src={img} />
          </div>
          <div className="firstQuart">
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <p>{idNum}</p> */}
            <p>{status}</p>
          </div>
        </div>
        <div className="lastPart">
          <Button removeBtn={removeBtn} id={idNum} />
          <Toggle
            handleChangeToggle={handleChangeToggle}
            status={status}
            id={idNum}
            changeData={changeData}
            updateItem={updateItem}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
