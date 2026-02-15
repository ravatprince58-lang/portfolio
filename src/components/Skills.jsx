import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiVercel } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 70 },
  { name: "React.js", icon: <FaReact />, level: 70 },
  { name: "C / C++", icon: <SiCplusplus />, level: 65 },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 60 },
  { name: "Deployment (Vercel)", icon: <SiVercel />, level: 70 },
];

function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition"
          >

            <div className="flex items-center gap-3 mb-3 text-xl font-semibold">
              <span className="text-2xl text-blue-500">
                {skill.icon}
              </span>
              {skill.name}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
              />
            </div>

            <p className="text-right mt-1 text-sm">
              {skill.level}%
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
