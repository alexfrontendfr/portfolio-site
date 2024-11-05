// src/components/Contact/Contact.jsx
import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (formData) => {
    try {
      // Create email content
      const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:contactalexfr@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(emailContent)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message will be sent through your email client.",
      });

      return true;
    } catch {
      setSubmitStatus({
        type: "error",
        message: "There was an error. Please try again or email me directly.",
      });
      return false;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>

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
              Feel free to reach out anytime! I&apos;ll get back to you as soon
              as possible.
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
              Let&apos;s schedule a call to discuss your project in detail.
            </p>
          </div>
        </div>

        <div>
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg mb-4 ${
                submitStatus.type === "success"
                  ? "bg-green-500 bg-opacity-10 text-green-400"
                  : "bg-red-500 bg-opacity-10 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
