"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      setIsVisible(true);
      setIsLeaving(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      setIsLeaving(true);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsLeaving(false);
      }, 200); // Match the animation duration
    }
  }, [isHovering]);

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
    if (!isVisible || !linkRef.current) return { left: 0, top: 0 };
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
      {isVisible && (
        <span
          className="cursor-help fixed z-50 pointer-events-none origin-top-left"
          style={{
            left: `${tooltipPosition.left}px`,
            top: `${tooltipPosition.top}px`,
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            animation: isLeaving
              ? "tooltipFadeOut 0.2s ease-in forwards"
              : "tooltipFadeIn 0.2s ease-out forwards",
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill={true}
            className="w-full h-full object-cover shadow-lg rounded-lg"
          />
          <style jsx global>{`
            @keyframes tooltipFadeIn {
              from {
                opacity: 0;
                transform: scale(0.95) tranneutralY(5px);
              }
              to {
                opacity: 1;
                transform: scale(1) tranneutralY(0);
              }
            }

            @keyframes tooltipFadeOut {
              from {
                opacity: 1;
                transform: scale(1) tranneutralY(0);
              }
              to {
                opacity: 0;
                transform: scale(0.95) tranneutralY(5px);
              }
            }
          `}</style>
        </span>
      )}
    </>
  );
};
