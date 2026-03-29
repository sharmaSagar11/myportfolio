import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Cult Fragrances",
    image: "/cult.jpg", // place inside public folder
    problem: "Needed a modern and premium e-commerce experience.",
    solution:
      "Built a responsive React UI with strong branding, smooth UX and optimized product display.",
    result:
      "Enhanced user engagement and created a luxury digital presence.",
    tech: ["React", "Tailwind", "UI/UX"],
    live: "https://cultfragrances.in",
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.jpg",
    problem:
      "Required a personal brand website to showcase projects and skills.",
    solution:
      "Developed a fast, animated portfolio using React, Vite and Framer Motion.",
    result:
      "Created a modern, smooth and highly responsive experience.",
    tech: ["React", "Vite", "Framer Motion"],
    live: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 relative">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] -translate-x-1/2"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Selected Work
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A glimpse of how I solve real problems with design, code and performance.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {caseStudies.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0d0d0d]"
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl"></div>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* Problem */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 uppercase">Problem</p>
                <p className="text-gray-300 text-sm">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 uppercase">Solution</p>
                <p className="text-gray-300 text-sm">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase">Result</p>
                <p className="text-gray-300 text-sm">
                  {project.result}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300 group-hover:bg-yellow-400 group-hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-yellow-400 group-hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}