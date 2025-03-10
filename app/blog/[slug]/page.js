import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <article>
      <MDXRemote source={content} />
    </article>
  );
}
