import React from "react";
import cactusImage from "./assets/cactus.png";

function Cactus() {
  return (
    <div>
      <img
        className="cactus"
        src={cactusImage}
        alt="cactus"
        style={{
          position: "absolute",
          left: "calc(var(--left) * 1%)",
          height: "30%",
          bottom: "0",
        }}
      />
    </div>
  );
}

export default Cactus;
