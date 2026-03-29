import { motion } from "framer-motion";

export default function Capabilities() {
  const items = [
    "E-commerce Websites",
    "Booking & Appointment Systems",
    "Admin Dashboards to manage your business efficiently",
    "Mobile Apps (React Native)",
    "Custom Web Applications",
    "API Integrations",
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        What I Can Build For You
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-400 transition"
          >
            ✔ {item}
          </div>
        ))}
      </div>
    </motion.section>
  );
}