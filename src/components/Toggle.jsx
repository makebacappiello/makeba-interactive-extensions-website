import { useState } from "react";
import Switch from "react-switch";

const Toggle = ({ handleChangeToggle, checked, status }) => {
  console.log("ID in toggle", checked);
  return (
    <div className="toggleSwitch">
      <label>
        <Switch
          onChange={handleChangeToggle}
          checked={status ? true : false}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#F15B56"
          offColor="#525768"
        />
      </label>
    </div>
  );
};
export default Toggle;
