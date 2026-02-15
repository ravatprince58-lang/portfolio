function ProjectModal({ project, close }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

      <div className="bg-white dark:bg-gray-900 p-6 rounded max-w-lg">

        <h2 className="text-2xl mb-3">{project.title}</h2>
        <p>{project.description}</p>

        <button
          onClick={close}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default ProjectModal;
