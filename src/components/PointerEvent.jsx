import { useEffect, useState } from "react";

export default function PointerEvent() {
  const [canMove, setCanMove] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    if (canMove) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  useEffect(() => {
    console.log("first");
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        <span className="checkText">
          Check if you want to move the red ball
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          opacity: 0.5,
          transform: `translate(${position.x}px,${position.y}px)`,
          pointerEvents: "none",
          left: 20,
          top: -20,
          width: 80,
          height: 80,
        }}
      />
    </div>
  );
}
