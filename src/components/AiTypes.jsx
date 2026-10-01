const aiTypes = [
  {
    title: "Machine Learning",
    description:
      "Systems that learn and improve from experience without being explicitly programmed.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    tags: [
      { text: "Predictive", color: "primary" },
      { text: "Adaptive", color: "secondary" },
    ],
  },
  {
    title: "Neural Networks",
    description:
      "Biologically inspired networks that simulate human brain functions for pattern recognition.",
    image:
      "https://images.unsplash.com/photo-1645839057098-5ea8761a6b09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tags: [
      { text: "Deep Learning", color: "primary" },
      { text: "Complex Data", color: "accent" },
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Enabling machines to understand, interpret, and generate human language naturally.",
    image:
      "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    tags: [
      { text: "Chatbots", color: "secondary" },
      { text: "Translation", color: "accent" },
    ],
  },
];

const tagColors = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export default function AiTypes() {
  return (
    <>
      <section id="types" className="app-container py-16">
        <div className="text-center mb-12">
          <span className="section-subheader">AI Technologies</span>
          <h2 className="section-header">
            Diffrent Types of{" "}
            <span className="gradient-text">Artificial Intelligence</span>
            <p className="section-desc">
              Explore the diverce landscape of AI technologies that are shaping
              our future.
            </p>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTypes.map((type) => (
            <article key={type.title} className="ai-type-card">
              <img
                className="ai-type-card-image"
                src={type.image}
                alt={type.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="ai-type-card-icon">{type.icon}</div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                </div>
                <p className="mt-2 text-gray-600">{type.description}</p>
                <div className="mt-4 flex items-center gap-x-2">
                  {type.tags.map((tag) => (
                    <span
                      className={`ai-type-card-tag ${tagColors[tag.color]}`}
                      key={tag.text}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
