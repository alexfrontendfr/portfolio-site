import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["All", "Development", "Web Design"];

  const filteredProjects = projects.filter(
    (project) =>
      filter === "all" ||
      project.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>

        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category.toLowerCase())}
              className={`
                px-4 py-2 rounded-lg transition-colors
                ${
                  filter === category.toLowerCase()
                    ? "bg-[#ffd700] text-black"
                    : "bg-[#1c1c1c] hover:bg-[#252525]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
