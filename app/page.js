import Image from "next/image";
import { PageTitle } from "@/components/page-title";

const Home = () => {
  return (
    <div className="flex w-full flex-row gap-48">
      <div className="flex-col flex flex-1">
        <PageTitle>Joshua Beitler</PageTitle>
        <p className="text-slate-400 text-xl">
          Hi, I&apos;m a builder of beautiful software specializing in Product
          Management at ambitious startups.
        </p>
        <p className="text-slate-400 text-xl">
          For the past 9 years, I worked at{" "}
          <a href="https://zonos.com">Zonos</a>, the world&apos;s leader in
          cross-border ecommerce APIs and shopper experiences.
        </p>
        <p className="text-slate-400 text-xl">
          There, I built and shipped a number of products, including the
          company&apos;s flagship product, Zonos Checkout, a cross-border
          ecommerce checkout that powers hundreds of thousands of shipments per
          month.
        </p>
        <p className="text-slate-400 text-xl">
          For four years, I have also run <a href="https://www.stgeorgeutah.com/news/nearly-300-competitors-code-through-the-night-at-annual-st-george-event/article_35cd4894-a88b-11ef-863a-63fcf33d1a4a.html">CodeCamp</a>
          , the largest and oldest hackathon in the Southern Utah region.
        </p>
        <p className="text-slate-400 text-xl">
          I&apos;m  now looking for my next opportunity to build something
          amazing with a team of talented individuals. Please <a href="mailto:hello+site@btlr.xyz">Reach out</a> if that sounds interesting.
        </p>
        </div>
      <div className="flex flex-1">
        <Image 
          src="/me.jpeg" 
          alt="Joshua Beitler" 
          width={300} 
          height={300} 
          className="rounded-2xl rotate-2 shadow-md transition-all duration-300 ease-in-out hover:rotate-[3deg] hover:shadow-xl"
          style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default Home;
