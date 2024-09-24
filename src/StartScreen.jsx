import React from "react";

function StartScreen() {
  return (
    <div>
      <div
        className="start-screen"
        style={{
          position: "absolute",
          fontSize: "5vimn",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Press Any Key To Start!
      </div>
    </div>
  );
}

export default StartScreen;
