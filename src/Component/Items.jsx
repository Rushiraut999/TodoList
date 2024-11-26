import React from "react";
import CSS from "./Items.module.css";
const Items = (props) => {
  return (
    <>
      <div className={CSS.items}>
        <div className={CSS.text}>{props.item}</div>
        <button
          className={CSS.button}
          onClick={(e) => {
            props.deleteitem(props.index);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};
export default Items;
