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
          For four years, I have also run <a href="#">CodeCamp</a>
          , the largest and oldest hackathon in the Southern Utah region.
        </p>
        <p className="text-slate-400 text-xl">
          I&apos;m  now looking for my next opportunity to build something
          amazing with a team of talented individuals. Please <a href="#">Reach out</a> if that sounds interesting.
        </p>
        </div>
      <div className="flex flex-1">asdf</div>
    </div>
  );
};

export default Home;
