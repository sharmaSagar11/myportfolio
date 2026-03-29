import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eba09oo",
        "template_udic5g7",
        e.target,
        "7HlQtgShJqa0g1f9r"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16 relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something great 🚀
          </h2>

          <p className="text-gray-400 mb-8">
            Have a project in mind or need help with your website?  
            I’ll help you turn your idea into a fast, scalable and modern product.
          </p>

          {/* Quick Contact */}
          <div className="space-y-4 mb-8">
            <p className="text-sm text-gray-300">📧 sagar.94.007@gmail.com</p>
            <p className="text-sm text-gray-300">📍 India</p>
          </div>

          
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
            rows="4"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-500 text-center">
            I usually respond within 24 hours
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
  No spam. Just project discussion.
</p>
        </motion.form>
      </div>
    </section>
  );
}