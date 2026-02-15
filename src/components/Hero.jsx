import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Ravat Prince</span>
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Frontend Developer | React Developer
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="/resume.pdf"
            className="bg-blue-500 px-6 py-2 rounded text-white"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
