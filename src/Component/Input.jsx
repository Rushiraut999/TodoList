import React from "react";
import css from "./Input.module.css";
const Input = ({ onKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        name="input"
        id="input"
        placeholder="Add Item"
        className={css.Input}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
export default Input;
