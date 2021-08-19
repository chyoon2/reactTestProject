import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = { text: "click me" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter Name:
      </label>
      <input id='name' type='text' />
      <button style={style}>{buttonText.text} </button>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
