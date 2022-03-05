import React from "react";

const InputDetails = ({ name, placeholder, value, setvalue }) => {
  const styles = {
    inputcon: {
      display: "flex",
      justifyContent: window.innerWidth <= 500 ? "flex-start" : "center",
      alignItems: window.innerWidth <= 500 ? "flex-start" : "center",
      flexDirection: window.innerWidth <= 500 ? "column" : "row",
      marginTop: 20,
    },
    inputcon1: {
      border: "2px solid black",
      padding: 5,
      borderRadius: 4,
      marginLeft: window.innerWidth <= 500 ? 0 : 10,
      marginTop: 10,
    },
    input: {
      border: 0,
      outline: 0,
      caretColor: "black",
      width: window.innerWidth <= 500 ? "300px" : "400px",
    },
  };

  return (
    <div style={styles.inputcon}>
      <label htmlFor="name">{name} : </label>
      <div style={styles.inputcon1}>
        <input
          type="text"
          id="name"
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputDetails;
