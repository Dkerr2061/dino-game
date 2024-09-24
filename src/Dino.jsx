import React from "react";
import dinoImage from "./assets/dino-stationary.png";

function Dino() {
  return (
    <div>
      <img
        className="dino"
        src={dinoImage}
        alt="dino"
        style={{
          "--bottom": "0",
          position: "absolute",
          left: "1%",
          height: "30%",
          bottom: "calc(var(--bottom) * 1%)",
        }}
      />
    </div>
  );
}

export default Dino;
