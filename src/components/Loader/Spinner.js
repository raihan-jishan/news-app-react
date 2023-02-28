import React from "react";
import load from "../../assets/loading spinner.gif";
const Spinner = () => {
  return (
    //  hard code the div
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
      }}
    >
      <img
        src={load}
        alt="loading"
        width={60}
        //  hard coded   🤦
        style={{
          borderRadius: "1rem",
        }}
      />
    </div>
  );
};

export default Spinner;
