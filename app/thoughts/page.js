import { getPosts } from "@/lib/get-posts";
import { PageTitle } from "@/components/page-title";

const Thoughts = () => {
  const posts = getPosts();

  return (
    <>
      <PageTitle>Thoughts</PageTitle>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="flex space-x-4">
            <span className="text-gray-400 w-24 tabular-nums">
              {post.year} • {post.month}
            </span>
            <div className="flex flex-col">
              <a
                href={`/blog/${post.slug}`}
                className="text-black hover:text-gray-600 transition-colors underline"
              >
                {post.title}
              </a>
              <span className="text-gray-500 mt-0.5">{post.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Thoughts;
