import React from "react";

const projects = [
  {
    id: 1,
    name: "Brand Builder AI",
    tech: ["React", "OpenAI", "Tailwind CSS"],
    image: "https://placehold.co/600x400?text=Brand+Builder+AI",
  },
  {
    id: 2,
    name: "Influence Tracker Dashboard",
    tech: ["Next.js", "Chart.js", "Firebase"],
    image: "https://placehold.co/600x400?text=Influence+Tracker",
  },
  {
    id: 3,
    name: "Creator’s Hub",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400?text=Creator's+Hub",
  },
  {
    id: 4,
    name: "Campaign Collab Portal",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    image: "https://placehold.co/600x400?text=Campaign+Portal",
  },
];

const ProjectsWorkedOn = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects I've Worked On</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#bf6d45]/25 text-gray-700 text-sm px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsWorkedOn;
