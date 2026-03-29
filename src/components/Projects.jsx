import { motion } from "framer-motion";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Cult Fragrances E-commerce",
      type: "Live Project",
      desc: "Developed a complete e-commerce platform with product listings, cart, and checkout system.",
      features: [
        "Responsive UI for all devices",
        "Optimized product display",
        "Clean and modern design",
      ],
      tech: "React, Firebase, Tailwind CSS",
      image: project1,
      live: "https://cultfragrances.in",
      github: "#",
    },
    {
      title: "Portfolio Website",
      type: "Personal Project",
      desc: "Built a modern portfolio website with animations and integrated contact system to capture client leads.",
      features: [
        "Smooth animations with Framer Motion",
        "Fully responsive design",
        "EmailJS contact integration",
      ],
      tech: "React, Tailwind CSS, Framer Motion, EmailJS",
      image: project2,
      live: "https://sagarsharmadev.in/", // replace after deploy
      github: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-56 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <p className="text-xs text-yellow-400 mb-2">
                {p.type}
              </p>

              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {p.desc}
              </p>

              <ul className="mt-4 text-gray-400 space-y-1 text-sm">
                {p.features.map((f, index) => (
                  <li key={index}>✔ {f}</li>
                ))}
              </ul>

              <p className="text-yellow-400 mt-4 text-sm">
                {p.tech}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={p.live}
                  target="_blank"
                  className="bg-yellow-400 text-black px-4 py-2 rounded text-sm"
                >
                  Live
                </a>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}