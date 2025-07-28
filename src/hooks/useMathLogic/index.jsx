import React, { useState } from 'react';

const useMathLogic = () => {
  
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => prev === '0' ? number : prev + number);
      console.log(`Added number: ${number}`);
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
    console.log('Cleared');
  };

    const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("+");
    } else {
      console.log("sum: ", Number(firstNumber), Number(currentNumber));
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator("");
    }
  };

  const handleMinus = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("-");
    } else {
      console.log("Minus: ", Number(firstNumber), Number(currentNumber));
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator("");
    }
  };

  const handleDivision = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("/");
    } else {
      console.log("Division: ", Number(firstNumber), Number(currentNumber));
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator("");
    }
  };

  const handleMultipler = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperator("*");
    } else {
      console.log("Multipler: ", Number(firstNumber), Number(currentNumber));
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operator !== "" && currentNumber !== "0") {
      switch (operator) {
        case "+":
          console.log("operator is: ", operator);
          handleSum();
          break;
        case "-":
          console.log("operator is: ", operator);
          handleMinus();
          break;
        case "/":
          console.log("operator is: ", operator);
          handleDivision();
          break;
        case "*":
          console.log("operator is: ", operator);
          handleMultipler();
          break;
        default:
          break;
      }
    }
  };

  return { currentNumber, firstNumber, operator, handleAddNumber, handleClear, handleSum, handleMinus, handleDivision, handleMultipler, handleEquals }; // Retorna o que o componente precisa
};

export default useMathLogic;