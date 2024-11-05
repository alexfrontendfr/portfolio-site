// src/components/Resume/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "ICT & Smart Mobile",
    school: "Fontys Eindhoven",
    period: "2020 - 2024",
    description:
      "Bachelor's degree with focus on software development and mobile applications. Achieved 8.0 average grade.",
  },
  {
    degree: "ICT & Business Economics",
    school: "CNVM Romania",
    period: "2015-2019",
    description:
      "High School diploma with 8.78 Baccalaureate. Focus on computer science and business fundamentals.",
  },
];

const Education = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="text-primary" />
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-lighter p-6 rounded-xl"
          >
            <h3 className="text-xl font-medium mb-2">{edu.degree}</h3>
            <div className="text-primary mb-2">{edu.school}</div>
            <div className="text-light-muted text-sm mb-4">{edu.period}</div>
            <p className="text-light-muted">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
