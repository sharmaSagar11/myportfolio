import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Client / Reviewer",
      text: "Great developer to work with. Delivered clean and efficient solutions.",
    },
    {
      name: "Project Feedback",
      text: "Strong understanding of UI/UX and modern web development practices.",
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-gray-950 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        What People Say
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-black rounded-lg border border-gray-800"
          >
            <p className="text-gray-400">"{t.text}"</p>
            <h4 className="mt-4 text-yellow-400">- {t.name}</h4>
          </div>
        ))}
      </div>
    </motion.section>
  );
}