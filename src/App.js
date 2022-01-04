import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Increment/Decrement Counter</h1>
          <h4>using React and Redux</h4>
        </div>

        <div className="quantity">
          <a className="quantity-minus" onClick={() => dispatch(decNum())}>
            <span>-</span>
          </a>
          <input type="text" className="quantity-input" value={myState} />
          <a className="quantity-plus" onClick={() => dispatch(incNum())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
