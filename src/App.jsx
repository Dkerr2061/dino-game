import React, { useEffect, useRef } from "react";
import dinoImage from "./assets/dino-stationary.png";
import groundImage from "./assets/ground.png";
import cactusImage from "./assets/cactus.png";
import "./App.css";
import Ground from "./Ground";
import StartScreen from "./StartScreen";
import Dino from "./Dino";
import Score from "./Score";
import Cactus from "./Cactus";

function App() {
  const WORLD_WIDTH = 100;
  const WORLD_HEIGHT = 30;

  const worldElement = document.querySelector(".world");

  let lastTime;
  function update(time) {
    if (lastTime == null) {
      lastTime = time;
      window.requestAnimationFrame(update);
      return;
    }
    const delta = time - lastTime;
    lastTime = time;
    window.requestAnimationFrame(update);
    console.log(delta);
  }

  window.requestAnimationFrame(update);

  function setPixelToWorldScale() {
    let worldToPixelScale;
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
      worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    } else {
      worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
    }

    worldElement.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
    worldElement.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
  }
  window.addEventListener("resize", setPixelToWorldScale);

  // useRef for the world element
  // const worldRef = useRef(null);

  // // Effect to handle scaling and updates
  // useEffect(() => {
  //   function setPixelToWorldScale() {
  //     let worldToPixelScale;
  //     if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
  //       worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  //     } else {
  //       worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  //     }

  //     // Access world element using ref
  //     if (worldRef.current) {
  //       worldRef.current.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  //       worldRef.current.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
  //     }
  //   }

  //   // Set initial scale
  //   setPixelToWorldScale();

  //   // Add event listener for resize
  //   window.addEventListener("resize", setPixelToWorldScale);

  //   return () => {
  //     // Clean up the event listener
  //     window.removeEventListener("resize", setPixelToWorldScale);
  //   };
  // }, []); // Empty dependency array to run only once

  // // Animation frame logic
  // useEffect(() => {
  //   let lastTime = null;

  //   function update(time) {
  //     if (lastTime == null) {
  //       lastTime = time;
  //       window.requestAnimationFrame(update);
  //       return;
  //     }
  //     const delta = time - lastTime;
  //     lastTime = time;
  //     window.requestAnimationFrame(update);
  //   }

  //   window.requestAnimationFrame(update);
  // }, []); // Run this effect only once

  return (
    <div
      className="body"
      style={{
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="world"
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "200px",
        }}
      >
        <Score />
        <StartScreen />
        <Ground update={update} />
        <Dino />
        <Cactus />
      </div>
    </div>
  );
}

export default App;
