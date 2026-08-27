import { useEffect, useState } from "react";

function AsyncDataFetching() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:5001/api/projects");
      const data = await response.json();

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project) => (
        <p key={project._id}>{project.title}</p>
      ))}
    </div>
  );
}

export default AsyncDataFetching;