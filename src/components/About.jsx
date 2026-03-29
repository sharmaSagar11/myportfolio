import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <p className="max-w-3xl mx-auto text-center text-gray-400">
        I am a freelance Frontend developer and IT consultant with 7+ years of experience in building 
        high-performance web applications using React, modern UI frameworks, 
        and scalable backend solutions. I help businesses turn ideas into 
        profitable digital solutions.
      </p>
    </motion.section>
  );
}