"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { QuoteOfTheDay } from "@/components/quote-of-the-day";

const PHOTOS = [
  { src: "/oates.jpeg", alt: "Joshua Beitler" },
  { src: "/halls.jpeg", alt: "Joshua Beitler" },
  { src: "/embarassing.jpeg", alt: "Joshua Beitler" },
  { src: "/me-cool.jpeg", alt: "Joshua Beitler" },
  { src: "/me.jpeg", alt: "Joshua Beitler" },
];

// 0 = back-left .. last = front-right (top of stack).
// Rainbow arc (inverted parabola): middle card sits highest, outer cards
// lower. Outer cards share the same y so their rotated bottom corners
// (mirrored ±13°) land on the same horizontal line. Middle card has a
// small tilt so the stack reads as hand-placed, not algorithmic.
const STACK_SLOTS = [
  { x: -220, y: 50, r: -13 },
  { x: -110, y: 25, r: -6 },
  { x: 2, y: 15, r: -2 },
  { x: 110, y: 25, r: 6 },
  { x: 220, y: 50, r: 13 },
];

export function Polaroid() {
  const [stackPos, setStackPos] = useState(() => PHOTOS.map((_, i) => i));
  const [poppedIdx, setPoppedIdx] = useState(null);
  const popTimerRef = useRef(null);

  const handleSelect = useCallback(
    (clickedIdx) => {
      const cur = stackPos[clickedIdx];
      const top = STACK_SLOTS.length - 1;
      if (cur === top) return;

      setStackPos((prev) =>
        prev.map((pos, idx) => {
          if (idx === clickedIdx) return top;
          if (pos > cur) return pos - 1;
          return pos;
        }),
      );
      setPoppedIdx(clickedIdx);
      if (popTimerRef.current) clearTimeout(popTimerRef.current);
      popTimerRef.current = setTimeout(() => setPoppedIdx(null), 720);
    },
    [stackPos],
  );

  useEffect(
    () => () => {
      if (popTimerRef.current) clearTimeout(popTimerRef.current);
    },
    [],
  );

  const topPos = STACK_SLOTS.length - 1;

  return (
    <div className="polaroid-stack">
      {PHOTOS.map((photo, i) => {
        const pos = stackPos[i];
        const slot = STACK_SLOTS[pos];
        return (
          <PolaroidCard
            key={i}
            photo={photo}
            slot={slot}
            zIndex={pos}
            isFront={pos === topPos}
            isPopping={poppedIdx === i}
            enterDelay={i * 80}
            onSelect={() => handleSelect(i)}
          />
        );
      })}
    </div>
  );
}

function PolaroidCard({
  photo,
  slot,
  zIndex,
  isFront,
  isPopping,
  enterDelay,
  onSelect,
}) {
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const [isEntering, setIsEntering] = useState(true);

  // Strip the entrance animation after it finishes so it can't restart when
  // the .is-popping class is later removed (which would re-trigger the
  // animation property on .polaroid-card and replay the entrance).
  useEffect(() => {
    const totalMs = 650 + enterDelay + 100;
    const t = setTimeout(() => setIsEntering(false), totalMs);
    return () => clearTimeout(t);
  }, [enterDelay]);

  const handleMove = useCallback(
    (e) => {
      if (!isFront || isPopping) return;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
        el.style.setProperty("--rx", `${((0.5 - y) * 12).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
        el.style.setProperty("--lift", "1");
        el.style.setProperty("--glare", "1");
      });
    },
    [isFront, isPopping],
  );

  const handleLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "30%");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--lift", "0");
    el.style.setProperty("--glare", "0");
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  useEffect(() => {
    if (!isFront) handleLeave();
  }, [isFront, handleLeave]);

  return (
    <div
      ref={cardRef}
      className={[
        "polaroid-card",
        isFront ? "is-front" : "",
        isPopping ? "is-popping" : "",
        isEntering ? "is-entering" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--slot-x": `${slot.x}px`,
        "--slot-y": `${slot.y}px`,
        "--slot-r": `${slot.r}deg`,
        "--enter-delay": `${enterDelay}ms`,
        zIndex,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onSelect}
    >
      <div className="polaroid-photo">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={300}
          height={300}
          priority={isFront}
          draggable={false}
          className="polaroid-img"
        />
        <div className="polaroid-emulsion-tint" />
        <div className="polaroid-iridescence" />
        <div className="polaroid-vignette" />
        <div className="polaroid-specular" />
        <div className="polaroid-grain" />
      </div>
      <div className="polaroid-caption">
        <QuoteOfTheDay />
      </div>
      <div className="polaroid-paper-sheen" />
      <div className="polaroid-edge" />
    </div>
  );
}
