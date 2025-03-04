import { getPosts } from "@/lib/get-posts";
import { PageTitle } from "@/components/page-title";

const Thoughts = () => {
  const posts = getPosts();

  return (
    <>
      <PageTitle>Thoughts</PageTitle>

      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post.slug} className="flex">
            <div className="flex flex-row">
              <a
                href={`/blog/${post.slug}`}
              >
                {post.title} 
                <span className="text-slate-300 mx-2">•</span>
                <span className="text-slate-500 mt-0.5">{post.subtitle}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Thoughts;
