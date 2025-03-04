import { Freehand } from "next/font/google";
import Image from "next/image";
import { PageTitle } from "@/components/page-title";

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
];

const Home = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="no-underline relative w-[1076px] -left-[calc((1076px-100%)/2)] flex flex-row gap-48">
      <div className="flex-col flex flex-1">
        <PageTitle>Joshua Beitler</PageTitle>
        <p className="text-slate-500 text-xl">
          Hi, I&apos;m a builder of beautiful software specializing in Product
          Management at ambitious startups.
        </p>
        <p className="text-slate-500 text-xl">
          For the past 9 years, I worked at{" "}
          <a href="https://zonos.com" target="_blank">
            Zonos
          </a>
          , the world leader in cross-border ecommerce APIs and shopper
          experiences, building a number of products and experiences that power
          millions of shipments globally per month.
        </p>
        <p className="text-slate-500 text-xl">
          I also run{" "}
          <a
            href="https://www.stgeorgeutah.com/news/nearly-300-competitors-code-through-the-night-at-annual-st-george-event/article_35cd4894-a88b-11ef-863a-63fcf33d1a4a.html"
            target="_blank"
          >
            CodeCamp
          </a>
          , the largest and oldest hackathon in the Southern Utah region - now
          on its 16th year.
        </p>
        <p className="text-slate-500 text-xl">
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
        <p className="text-slate-500 text-xl">
          I&apos;m now looking for my next opportunity to build something
          amazing with a team of talented individuals. Please{" "}
          <a href="mailto:hello+site@btlr.xyz">reach out</a> if that sounds
          interesting.
        </p>
      </div>
      <div className="flex flex-1 relative group mt-10">
        <Image
          className="stamp grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 absolute z-10 -top-16 -left-10 -rotate-3 group-hover:scale-105 transition-all ease-in-out duration-300"
          src="/passport-circle.svg"
          width={150}
          height={150}
          alt="Fun passport stamp for decorative effect"
        />

        <div className="text-center border-5 bg-white p-5 border-solid border-white group-hover:scale-[101%] rotate-2 shadow-md transition-all duration-300 ease-in-out group-hover:rotate-[3deg] group-hover:shadow-xl h-fit">
          <Image
            src="/me.jpeg"
            alt="Joshua Beitler"
            width={300}
            height={300}
            className="shadow-inner m-0 mb-3"
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
          />
          <div className="polaroid z-50 absolute left-0 top-0 w-full h-full opacity-30 group-hover:opacity-10 transition-all ease-in-out duration-300"></div>
          <span
            className={`transition-all ease-in-out duration-300 group-hover:text-slate-500 text-lg text-slate-400 stamp ${freehand.className}`}
          >
            &ldquo;
            {quote}
            &rdquo; -JB
          </span>
        </div>

        <Image
          className="stamp grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 absolute z-10 bottom-[40px] right-[60px] rotate-6 group-hover:scale-105 transition-all ease-in-out duration-300"
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
