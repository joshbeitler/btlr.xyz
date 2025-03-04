import { getPosts } from "@/lib/get-posts";
import { PageTitle } from "@/components/page-title";

const Thoughts = () => {
  const posts = getPosts();

  return (
    <>
      <PageTitle>Thoughts</PageTitle>

      <div className="space-y-4 no-underline">
        {posts.map((post) => (
          <div key={post.slug} className="flex">
            <div className="flex flex-column">
              <a href={`/blog/${post.slug}`}>
                <div>{post.title}</div>
                <div className="text-neutral-500 font-normal">
                  {post.subtitle}
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Thoughts;
