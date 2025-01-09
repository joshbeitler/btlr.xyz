const posts = [
  {
    year: "2024",
    month: "02",
    title: "Async over-communication",
    subtitle: "Thoughts on remote work communication patterns",
  },
  {
    year: "2024",
    month: "01",
    title: "At the park",
    subtitle: "Finding peace in urban spaces",
  },
  {
    year: "2024",
    month: "01",
    title: "Done overthinking hair",
    subtitle: "A meditation on personal care",
  },
  {
    year: "2024",
    month: "01",
    title: "Reboot",
    subtitle: "Starting fresh in the new year",
  },
  {
    year: "2023",
    month: "12",
    title: "2023",
    subtitle: "Year in review",
  },
  {
    year: "2023",
    month: "08",
    title: "On digital gardening",
    subtitle: "Growing ideas in the digital age",
  },
  {
    year: "2023",
    month: "06",
    title: "Quantum, Zen, and other things",
    subtitle: "Exploring connections between science and philosophy",
  },
  {
    year: "2023",
    month: "04",
    title: "My hands",
    subtitle: "On craft and making",
  },
  {
    year: "2022",
    month: "11",
    title: "Tools, autonomy, contemplation",
    subtitle: "The instruments of thought and creation",
  },
  {
    year: "2022",
    month: "11",
    title: "I bought a watch",
    subtitle: "Reflections on time and objects",
  },
  {
    year: "2021",
    month: "09",
    title: "Digital peasantry",
    subtitle: "Modern tools for ancient practices",
  },
  {
    year: "2021",
    month: "07",
    title: "Unlearning",
    subtitle: "The art of letting go",
  },
  {
    year: "2020",
    month: "05",
    title: "The socratic squat",
    subtitle: "Philosophy and physical practice",
  },
  {
    year: "2019",
    month: "12",
    title: "Not writing about it",
    subtitle: "On silence and presence",
  },
  {
    year: "2017",
    month: "05",
    title: "Yanaka",
    subtitle: "Walking through Tokyo's old town",
  },
];

const Home = () => (
  <>
    <h1 className="text-2xl font-normal mb-12">Thoughts</h1>

    <div className="space-y-6">
      {posts.map((post, index) => (
        <div key={index} className="flex space-x-4">
          <span className="text-gray-400 w-20 tabular-nums">
            {post.year} • {post.month}
          </span>
          <div className="flex flex-col">
            <a
              href={`#${post.title.toLowerCase().replace(/\s+/g, "-")}`}
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

export default Home;
