import React, { useState } from "react";

const ManageNumbers = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(firstNumber + secondNumber);
  };

  const handleInputChange = (e, setter) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  return (
    <>
      <h1>Number Adder</h1>
      <label>
        number 1
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => handleInputChange(e, setFirstNumber)}
        />
      </label>

      <label>
        number 2
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => handleInputChange(e, setSecondNumber)}
        />
      </label>

      <button onClick={handleAddition}>Addition</button>
      <div>results is {result}</div>
    </>
  );
};

export default ManageNumbers;
