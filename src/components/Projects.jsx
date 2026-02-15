const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using React.js and Tailwind CSS with modern UI.",
    live: "https://your-live-link.com",
    github: "https://github.com/ravatprince58-lang",
  },
  {
    title: "Mental Health-Care",
    description:
      "A modern mental healthcare platform focused on awareness, resources, and an intuitive user experience using React and Tailwind CSS..",
    live: "https://mental-health-app-ten-psi.vercel.app/",
    github: "https://github.com/ravatprince58-lang/Mental-HealthApp",
  },
   {
    title: "Simple Peste-app",
    description:
      "A modern mental healthcare platform focused on awareness, resources, and an intuitive user experience using React and Tailwind CSS..",
    live: "https://paste-app-eight-gamma.vercel.app/",
    github: "https://github.com/ravatprince58-lang/PasteApp",
  },
  {
    title: "Razorpay-clone-app",
    description:
      "A frontend clone of a popular website created to practice UI design, layout structure, and responsiveness.",
    live: "https://rezorpay-clone-app.vercel.app/",
    github: "https://github.com/ravatprince58-lang/Rezorpay_Clone_App",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            /> */}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
