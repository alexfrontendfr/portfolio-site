// src/components/About/Skills.jsx
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 75 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "DevOps", level: 70 },
      { name: "UI/UX Design", level: 80 },
      { name: "Technical Support", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-lg font-medium text-primary mb-4">
              {category.title}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-light-muted">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-lighter rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
