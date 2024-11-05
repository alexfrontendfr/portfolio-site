// src/components/Resume/Experience.jsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Creative Web Engineer",
    company: "Collabs Agency",
    period: "10.2021 - Present",
    location: "Groningen, The Netherlands",
    description: [
      "Architected 15+ e-commerce platforms using Webflow, Shopify and WordPress",
      "Developed interactive UIs with Framer Motion",
      "Led client discovery meetings and platform training",
    ],
  },
  {
    title: "L3 Software Engineer Support",
    company: "SASS Enterprise",
    period: "09.2023 - 07.2024",
    location: "Remote (U.S Timezone)",
    description: [
      "Solved 200+ complex integration cases",
      "Developed technical documentation",
      "Led enterprise client technical discussions",
    ],
  },
];

const Experience = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-primary" />
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-lighter p-6 rounded-xl"
          >
            <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
            <div className="text-primary mb-2">{exp.company}</div>
            <div className="text-light-muted text-sm mb-4">
              {exp.period} | {exp.location}
            </div>
            <ul className="list-disc list-inside text-light-muted space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
