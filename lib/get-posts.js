import fs from "fs";
import path from "path";
import matter from "gray-matter"; // is this the best lib?

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);
    const slug = filename.replace(/\.mdx$/, "");
    const [year, month] = data.date.split("-");

    return {
      slug,
      title: data.title,
      date: data.date,
      year,
      month,
      subtitle: data.subtitle,
    };
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
