import { motion } from "framer-motion";

const stats = [
  { number: "7+", label: "Years Experience" },
  { number: "8+", label: "Projects Delivered" },
  { number: "5+", label: "Technologies Worked On" },
];

const highlights = [
  "Clean & scalable code",
  "Fast turnaround time",
  "Business-focused solutions",
  "Mobile-first responsive design",
  "Smooth UI/UX with animations",
  "Post-delivery support",
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 relative">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Approach
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering solutions that are not just visually appealing, but also scalable and performance-driven.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center border border-gray-800 rounded-2xl p-8 bg-[#0d0d0d] hover:border-yellow-400 transition"
            >
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border border-gray-800 rounded-xl p-4 bg-[#111]"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}