import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-dark-lighter p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                <Mail className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-light-muted">contactalexfr@gmail.com</p>
              </div>
            </div>
            <p className="text-light-muted text-sm">
              Feel free to reach out any time! I will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="bg-dark-lighter p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                <MessageSquare className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Quick Chat</h3>
                <p className="text-light-muted">Available for meetings</p>
              </div>
            </div>
            <p className="text-light-muted text-sm">
              Lets schedule a call to discuss your project in detail.
            </p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-light-muted mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-light-muted mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm text-light-muted mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-light-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-dark-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-dark-darker rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Message
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
