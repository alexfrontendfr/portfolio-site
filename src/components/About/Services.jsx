// src/components/About/Services.jsx
import { motion } from "framer-motion";
import { Code, Database, Layout, Terminal } from "lucide-react";

const services = [
  {
    icon: <Code size={24} />,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, Next.js, and modern JavaScript.",
  },
  {
    icon: <Database size={24} />,
    title: "Backend Integration",
    description:
      "Creating robust backend solutions using Python, C#, and SQL databases.",
  },
  {
    icon: <Layout size={24} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with a focus on user experience and accessibility.",
  },
  {
    icon: <Terminal size={24} />,
    title: "Technical Support",
    description:
      "Providing expert technical support and problem-solving for complex software systems.",
  },
];

const Services = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
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
            <h3 className="text-lg font-medium mb-2">{service.title}</h3>
            <p className="text-light-muted text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
