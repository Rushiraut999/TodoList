import React, { useState } from "react";
import "./App.css";
import Heder from "./Component/Heder";                    
import Input from "./Component/Input";
import Items from "./Component/Items";

const App = () => {
  const [items, setitems] = useState([""]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let arr = [...items, newItem];
      setitems(arr);
      console.log(newItem);
      console.log(items);
      event.target.value = " ";
    }
  };
  const deleteitem = (index) => {
    let removeitems = [...items];
    removeitems.splice(index, 1);
    setitems([...removeitems]);
  };
  return (
    <>
      <div className="center">
        <div className="main">
          <Heder />
          <Input onKeyDown={onKeyDown} />
          {items.map((item, i) => (
            <Items item={item} key={item} index={i} deleteitem={deleteitem} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
