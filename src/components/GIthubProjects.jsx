import { useEffect, useState } from "react";
import axios from "axios";

function GithubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ravatprince58-lang/repos")
      .then((res) => setRepos(res.data));
  }, []);

  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        GitHub Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {repos.slice(0, 6).map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-200 dark:bg-gray-800 p-4 rounded"
          >
            <h3>{repo.name}</h3>

            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-500"
            >
              View Code
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default GithubProjects;
