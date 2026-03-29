import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size (disable heavy effects on mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cursor Glow Effect (only desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  return (
    <section className="bg-black text-white min-h-[auto] md:min-h-screen py-20 md:py-0 px-6 md:px-16 relative overflow-hidden flex items-center">

      {/* Cursor Glow (Desktop Only) */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl z-0"
          style={{
            left: position.x - 150,
            top: position.y - 150,
          }}
        />
      )}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-400/10 blur-[80px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-5 max-w-xl mx-auto md:mx-0 tracking-tight"
          >
            I build fast, scalable web experiences that{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
              help businesses grow
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0"
          >
            Freelance Frontend developer and IT consultant with 7+ years of experience delivering modern, high-performance digital solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center border border-gray-700 px-6 py-3 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Let’s Work Together
            </a>
            
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-gray-500">
            <span>✔ 7+ Years Experience</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Scalable Solutions</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <motion.img
            src="/profile.jpg"
            alt="Developer"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] rounded-full object-cover border-4 border-gray-800"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}