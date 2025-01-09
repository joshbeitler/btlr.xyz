import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageTitle } from "@/components/page-title";

export default async function Page({ params }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  // const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return (
    <article className="prose">
      <MDXRemote source={content} />
    </article>
  );
}
