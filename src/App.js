import React, { useState } from "react";

function App() {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  }
  return (
    <div>
      <input type="text" id="textbox" onChange={handleChange} />
      <h1>{text}</h1>
    </div>
  );
}

export default App;
