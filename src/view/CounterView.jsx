import React from "react";

const CounterView = ({ count, isAutoIncrement, onIncrement, onDecrement, onReset, onToggle }) => {
  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "teal",
    padding: "15px",
    width: "50%",
    margin: "0 auto",
    borderRadius: "10px"
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "10px",
    margin: "10px 0",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  };

  const decrementStyle = { ...buttonStyle, backgroundColor: "pink", color: "black", fontweight: "bold" };
  const incrementStyle = { ...buttonStyle, backgroundColor: "pink", color: "black", fontweight: "bold" };
  const resetStyle = { ...buttonStyle, backgroundColor: "#f28f88", color: "black", marginTop: "10px" };

  const toggleContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    cursor: "pointer",
  };

  const toggleBoxStyle = {
    width: "50px",
    height: "25px",
    backgroundColor: isAutoIncrement ? "green" : "white",
    borderRadius: "50px",
    border: "2px solid black",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "3px",
    transition: "background-color 0.3s ease",
  };

  const toggleCircleStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "black",
    borderRadius: "50%",
    position: "absolute",
    left: isAutoIncrement ? "calc(100% - 23px)" : "3px",
    transition: "left 0.3s ease",
  };

  const toggleLabelStyle = { marginLeft: "10px", fontSize: "16px" };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "white" }}>Counter App</h2>
      <h1 style={{ color: "white" }}>{count}</h1>

      <div style={buttonRowStyle}>
        <button style={decrementStyle} onClick={onDecrement}>-</button>
        <button style={incrementStyle} onClick={onIncrement}>+</button>
      </div>

      <button style={resetStyle} onClick={onReset}>Reset</button>

      <div style={toggleContainerStyle} onClick={onToggle}>
        <div style={toggleBoxStyle}>
          <div style={toggleCircleStyle}></div>
        </div>
        <span style={toggleLabelStyle}>Auto Increment</span>
      </div>
    </div>
  );
};

export default CounterView;
