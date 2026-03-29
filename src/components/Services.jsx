import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "Custom Web Development",
    "React Applications",
    "E-commerce Development",
    "API Integration",
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }} id="services" className="py-20 px-6 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Services</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-black rounded-lg border border-gray-800 hover:border-yellow-400 transition"
          >
            {service}
          </div>
        ))}
      </div>
    </motion.section>
  );
}