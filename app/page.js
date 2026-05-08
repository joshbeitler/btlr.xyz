import { Polaroid } from "@/components/polaroid";

const Home = () => {
  return (
    <div className="flex flex-col">
      <header className="mb-2">
        <div className="text-2xl md:text-3xl text-neutral-900 font-bold leading-snug">
          Hi, I&apos;m Joshua Beitler
        </div>
      </header>

      <div className="mb-6 md:mb-8">
        <p className="text-neutral-500 text-xl">
          Currently I lead Product at{" "}
          <a href="https://getdx.com" target="_blank">
            DX
          </a>
          , helping build the developer intelligence platform used by
          high-performing teams. Before that, I was at{" "}
          <a href="https://zonos.com" target="_blank">
            Zonos
          </a>
          .
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

      <div className="md:-mx-[90px] mb-8 md:mb-0 -mt-[20px]">
        <Polaroid />
      </div>
    </div>
  );
};

export default Home;
