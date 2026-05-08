import { Polaroid } from "@/components/polaroid";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12 md:mb-16 md:-mx-[90px]">
        <Polaroid />
      </div>

      <div>
        <p className="text-neutral-500 text-xl">
          Hi, I&apos;m Joshua Beitler, a builder of beautiful software
          specializing in Product Management at ambitious startups.
        </p>
        <p className="text-neutral-500 text-xl">
          I currently work at{" "}
          <a href="https://getdx.com" target="_blank">
            DX
          </a>
          , helping to build the developer intelligence platform used by high
          performing teams. Before that, I worked at{" "}
          <a href="https://zonos.com" target="_blank">
            Zonos
          </a>
          .
        </p>
        <p className="text-neutral-500 text-xl">
          I also run{" "}
          <a
            href="https://www.stgeorgeutah.com/news/nearly-300-competitors-code-through-the-night-at-annual-st-george-event/article_35cd4894-a88b-11ef-863a-63fcf33d1a4a.html"
            target="_blank"
          >
            CodeCamp
          </a>
          , the largest CS outreach organization in Southern Utah.
        </p>
        <p className="text-neutral-500 text-xl">
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
      </div>
    </div>
  );
};

export default Home;
