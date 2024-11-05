import { motion } from "framer-motion";
import { Code, Palette, Terminal, Camera } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description:
        "Expert in React, JavaScript, and modern web technologies, building responsive and performant applications.",
    },
    {
      icon: <Terminal size={24} />,
      title: "Backend Integration",
      description:
        "Experience with Python, C#, and SQL for full-stack development and database management.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces with Figma, Framer, and modern design principles.",
    },
    {
      icon: <Camera size={24} />,
      title: "Website Platforms",
      description:
        "Proficient in WebFlow, WordPress, Shopify, and other CMS platforms.",
    },
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Backend Development", level: 70 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section>
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-light-muted">
            Frontend developer with 4 years of experience building web
            applications and e-commerce platforms. Expert in React, JavaScript,
            and modern web technologies. Combines technical expertise with
            strong communication skills to deliver successful B2B and B2C
            projects. Experienced in full-stack development using Python and
            SQL.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter p-6 rounded-xl"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h4 className="text-lg font-medium mb-2">{service.title}</h4>
              <p className="text-light-muted text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6">Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-dark-lighter rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
