import React, { useState, useEffect } from "react";
import "./Cursor.css";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [hovering, setLinkHovering] = useState(false);

  //useffects
  useEffect(() => {
    addEventListeners();
    return () => removeEventsListeners();
  });

  //add and remove listeners for mouse events
  const handleMouseMovements = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setHidden(true);
  };
  const handleMouseEnter = () => {
    setHidden(false);
  };
  const addEventListeners = () => {
    document.addEventListener("mousemove", handleMouseMovements);
    document
      .querySelector("body")
      .addEventListener("mouseover", () => setLinkHovering(true));
    document
      .querySelector("body")
      .addEventListener("mouseout", () => setLinkHovering(false));
  };
  const removeEventsListeners = () => {
    document.removeEventListener("mousemove", handleMouseMovements);
    document.removeEventListener("mouseenter", handleMouseEnter);
    document.removeEventListener("mouseenter", handleMouseLeave);
  };
  //classNames
  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--hovering": hovering,
  });
  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-label">Hi,There</div>
    </div>
  );
};

export default Cursor;
