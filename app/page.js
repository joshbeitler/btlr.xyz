import Image from "next/image";
import { PageTitle } from "@/components/page-title";

const Home = () => {
  return (
    <div className="relative w-[1076px] -left-[calc((1076px-100%)/2)] flex flex-row gap-48">
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
      <div className="flex flex-1">
        <Image
          src="/me.jpeg"
          alt="Joshua Beitler"
          width={300}
          height={300}
          className="rounded-2xl rotate-2 shadow-md transition-all duration-300 ease-in-out hover:rotate-[3deg] hover:shadow-xl"
          style={{ width: "auto", height: "auto", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Home;
