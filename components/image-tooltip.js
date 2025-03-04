"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

export const ImageTooltip = ({
  children,
  imageUrl,
  imageAlt = "Tooltip image",
  imageWidth = 200,
  imageHeight = 150,
  offsetX = 10,
  offsetY = 10,
  className = "",
  style = {},
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setPosition({ x, y });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const calculateTooltipPosition = () => {
    if (!isHovering || !linkRef.current) return { left: 0, top: 0 };

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = position.x + offsetX;
    let top = position.y + offsetY;

    if (left + imageWidth > viewportWidth) {
      left = position.x - imageWidth - offsetX;
    }

    if (top + imageHeight > viewportHeight) {
      top = position.y - imageHeight - offsetY;
    }

    return { left, top };
  };

  const tooltipPosition = calculateTooltipPosition();

  return (
    <>
      <a
        ref={linkRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`cursor-help ${className}`}
        style={{
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          ...style,
        }}
      >
        {children}
      </a>

      {isHovering && (
        <div
          className="cursor-help fixed z-50 pointer-events-none"
          style={{
            left: `${tooltipPosition.left}px`,
            top: `${tooltipPosition.top}px`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill={true}
            className="w-full h-full object-cover shadow-lg rounded-lg"
          />
        </div>
      )}
    </>
  );
};
