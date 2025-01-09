import { getPosts } from "@/lib/get-posts";

const Thoughts = () => {
  const posts = getPosts();

  return (
    <>
      <h1 className="text-2xl font-normal mb-12">Thoughts</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="flex space-x-4">
            <span className="text-gray-400 w-20 tabular-nums">
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
