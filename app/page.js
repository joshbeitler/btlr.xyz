"use client";

import Image from "next/image";
import { PageTitle } from "@/components/page-title";
import { QuoteOfTheDay } from "@/components/quote-of-the-day";
import { useState, useEffect, useCallback } from "react";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [coolMode, setCoolMode] = useState(false);

  const handleCardClick = () => {
    if (!coolMode) {
      setClickCount((prev) => prev + 1);
    }
  };

  const enableCoolMode = useCallback(() => {
    if (!coolMode) {
      setCoolMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [coolMode]);

  useEffect(() => {
    if (clickCount === 3) {
      const polaroidContainer = document.getElementById("polaroid-container");

      if (polaroidContainer) {
        // Get the current rotation (2deg by default, 3deg on hover)
        const isHovered = polaroidContainer.classList.contains(
          "group-hover:rotate-[3deg]",
        );
        const currentRotation = isHovered ? 3 : 2;

        // Apply flip while preserving Z rotation
        polaroidContainer.style.transform = `rotate(${currentRotation}deg) rotateY(180deg)`;

        // Enable cool mode after a small delay (one-way transition)
        setTimeout(() => {
          enableCoolMode();
        }, 1000);

        // Reset after animation completes
        const timer = setTimeout(() => {
          polaroidContainer.style.transform = "";
          setClickCount(0);
        }, 800);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [clickCount, enableCoolMode]);

  return (
    <div className="relative w-full md:w-[1076px] md:-left-[calc((1076px-100%)/2)] flex flex-col md:flex-row md:gap-48 gap-12 no-underline">
      <div className="flex-col flex flex-1">
        <PageTitle>Joshua Beitler</PageTitle>
        <p className="text-neutral-500 text-xl dark:text-neutral-400">
          Hi, I&apos;m Josh, a builder of beautiful software specializing in
          Product Management at ambitious startups.
        </p>
        <p className="text-neutral-500 text-xl dark:text-neutral-400">
          For the past 9 years, I worked at{" "}
          <a href="https://zonos.com" target="_blank">
            Zonos
          </a>
          , the world leader in cross-border ecommerce APIs and shopper
          experiences, building products and experiences that power millions of
          shipments globally per month.
        </p>
        <p className="text-neutral-500 text-xl dark:text-neutral-400">
          I also run{" "}
          <a
            href="https://www.stgeorgeutah.com/news/nearly-300-competitors-code-through-the-night-at-annual-st-george-event/article_35cd4894-a88b-11ef-863a-63fcf33d1a4a.html"
            target="_blank"
          >
            CodeCamp
          </a>
          , the largest CS outreach organization in Southern Utah, where we
          organize a 24 hour hackathon every year, now in its 16th year.
        </p>
        <p className="text-neutral-500 text-xl dark:text-neutral-400">
          For fun, I love taking{" "}
          <a href="https://instagram.com/joshbeitler" target="_blank">
            photos
          </a>
          , making{" "}
          <a
            href="https://music.apple.com/us/artist/phobos/1337460836"
            target="_blank"
          >
            music
          </a>
          , and enjoying my{" "}
          <a href="https://www.discogs.com/user/beitler" target="_blank">
            record
          </a>{" "}
          collection.
        </p>
        <p className="text-neutral-500 text-xl dark:text-neutral-400">
          I&apos;m now looking for my next opportunity to build something
          amazing with a team of talented individuals. Please{" "}
          <a href="mailto:hello+site@btlr.xyz">reach out</a> if that sounds
          interesting.
        </p>
      </div>
      <div className="flex flex-1 relative group mt-0 md:mt-10 mx-auto md:mx-0">
        <Image
          className="stamp grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 absolute z-10 -top-16 -left-10 -rotate-3 group-hover:scale-105 transition-all ease-in-out duration-300 hidden md:block"
          src="/passport-circle.svg"
          width={150}
          height={150}
          alt="Fun passport stamp for decorative effect"
        />

        {/* Perspective container */}
        <div style={{ perspective: "1000px" }} className="h-fit">
          {/* The entire polaroid that will flip */}
          <div
            id="polaroid-container"
            className="text-center border-5 bg-white dark:bg-neutral-950 p-5 border-solid border-white dark:border-neutral-950 group-hover:scale-[101%] rotate-2 shadow-md transition-all duration-500 ease-in-out group-hover:rotate-[3deg] group-hover:shadow-xl cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              position: "relative",
              transformOrigin: "center center",
            }}
            onClick={handleCardClick}
          >
            {/* Front of polaroid */}
            <div style={{ backfaceVisibility: "hidden" }}>
              <Image
                src={coolMode ? "/me-cool.jpeg" : "/me.jpeg"}
                alt="Joshua Beitler"
                width={300}
                height={300}
                className="shadow-inner m-0 mb-3"
                style={{ width: "auto", height: "auto", objectFit: "contain" }}
              />
              <div className="polaroid z-50 absolute left-0 top-0 w-full h-full opacity-30 group-hover:opacity-10 transition-all ease-in-out duration-300"></div>
              <QuoteOfTheDay />
            </div>

            {/* Back of polaroid */}
            <div
              className="transition-all ease-in-out duration-300 polaroid polaroid-semi absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white p-5 border-5 border-solid border-white dark:border-neutral-950 dark:bg-neutral-950"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Cool mode activated</h3>
              </div>
            </div>
          </div>
        </div>

        <Image
          className="stamp grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 absolute z-10 bottom-[55px] right-[40px] rotate-6 group-hover:scale-105 transition-all ease-in-out duration-300 hidden md:block"
          src="/passport-rect.svg"
          width={150}
          height={150}
          alt="Fun passport stamp for decorative effect"
        />
      </div>
    </div>
  );
};

export default Home;
