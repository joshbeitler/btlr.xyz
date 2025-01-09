export default async function Page({ params }) {
  const slug = params.slug;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return <Post />;
}
