import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences, certifications } from "../../data/experience";

const Resume = () => {
  const education = [
    {
      title: "ICT & Smart Mobile",
      institution: "Fontys Eindhoven",
      period: "2020 - 2024",
      details: "Bachelor's degree with 8.0 Average",
    },
    {
      title: "ICT & Business Economics",
      institution: "CNVM Romania",
      period: "2015-2019",
      details: "High School with 8.78 Baccalaureate",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-primary" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter p-6 rounded-xl"
            >
              <h3 className="text-xl font-medium mb-1">{job.title}</h3>
              <div className="text-primary mb-3">{job.company}</div>
              <div className="text-light-muted text-sm mb-4">
                {job.period} | {job.location}
              </div>
              <ul className="list-disc list-inside text-light-muted space-y-2">
                {job.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
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
              <h3 className="text-xl font-medium mb-1">{edu.title}</h3>
              <div className="text-primary mb-2">{edu.institution}</div>
              <div className="text-light-muted text-sm">{edu.period}</div>
              <div className="text-light-muted mt-2">{edu.details}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-primary" />
          <h2 className="text-2xl font-semibold">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter p-4 rounded-xl hover:bg-opacity-80 transition-colors"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-primary transition-colors"
              >
                {cert.title} - {cert.issuer}
                <div className="text-sm opacity-75 mt-1">{cert.date}</div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
