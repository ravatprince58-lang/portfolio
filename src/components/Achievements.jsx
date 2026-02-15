function Achievements() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Achievements & Certifications
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Hackathon */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            Hackathon Event — August 2025 🏆
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Secured <strong>3rd Place</strong> in a hackathon and received a trophy and certificates for both project development and presentation.
          </p>
          <a 
          href="/certificate/hackathon.pdf"
          target="_blank"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Certificate
          </a>
        </div>

        {/* Spoken English */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            Spoken English Course
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Completed a Spoken English course at <strong>AK (Akansha Chouhan) Institute</strong> to improve communication, vocabulary, and confidence.
          </p>
         <a 
          href="/certificate/spoken-english.pdf"
          target="_blank"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Certificate
          </a>
        </div>

        {/* Fashion Show */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            Fashion Show Participation — 2025
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Participated in a college fashion show organized by <strong>AK Institute</strong> and received a certificate for participation and recognition.
          </p>
          <a 
          href="/certificate/fashion-show.pdf"
          target="_blank"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
