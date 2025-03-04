"use client";

import { useState, useEffect } from "react";
import { Freehand } from "next/font/google";

const freehand = Freehand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const quotes = [
  "enjoying the great outdoors",
  "you can't see but its a canadian tux",
  "is my css polaroid convincing?",
  "email me - hello <at> btlr <dot> xyz",
  "follow me on twitter - @joshbeitler",
  "i like fountain pens",
  "i love you too, random citizen!",
  "try the blog - its refreshing",
  "hover on me, you know you want to!",
  "exclusive trading card",
  "follow me on insta - @joshbeitler",
  "follow me on github - @joshbeitler",
  "stream 'Sweet Sensation' by Phobos",
  "stream 'Sparkling' by Phobos",
  "stream 'Decadent' by Phobos",
  "100% pure, homegrown CSS. And Tailwind.",
  "No preservatives or GMOs",
  "you had to be there",
  "rizzard of oz",
  "chatgpt stole my wife",
  "this quote is brought to you by Brawndo",
  "think different",
  "do not fear, fear is the mind killer",
  "where we're going, we don't need roads",
  "now in 3D",
  "i'm going on an adventure!",
];

export const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <span
      className={`transition-all ease-in-out duration-300 group-hover:text-slate-500 text-lg text-slate-400 stamp ${freehand.className}`}
    >
      &ldquo;
      {quote}
      &rdquo; -JB
    </span>
  );
};
