import groundImage from "./assets/ground.png";

function Ground({ update }) {
  const groundElems = document.querySelectorAll(".ground");
  function updateGround(delta) {
    groundElems.forEach((ground) => {});
    update(delta);
  }
  return (
    <div>
      <img
        className="ground"
        src={groundImage}
        alt="ground"
        style={{
          "--left": "0",
          position: "absolute",
          width: "300%",
          bottom: "0",
          left: "calc(var(--left) * 1%)",
        }}
      />
    </div>
  );
}

export default Ground;
