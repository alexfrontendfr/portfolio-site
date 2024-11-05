import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Modern Frontend Development Practices",
      excerpt:
        "Exploring the latest trends and best practices in frontend development for 2024.",
      category: "Development",
      date: "April 1, 2024",
      author: "Alex Iulian",
      image: "/assets/images/blog-1.jpg",
    },
    {
      title: "Building Scalable React Applications",
      excerpt:
        "A comprehensive guide to architecting large-scale React applications.",
      category: "React",
      date: "March 25, 2024",
      author: "Alex Iulian",
      image: "/assets/images/blog-2.jpg",
    },
    {
      title: "UI/UX Design Principles",
      excerpt:
        "Essential design principles every frontend developer should know.",
      category: "Design",
      date: "March 15, 2024",
      author: "Alex Iulian",
      image: "/assets/images/blog-3.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold">Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-lighter rounded-xl overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-darker to-transparent opacity-60" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-light-muted mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={14} />
                  <span>{post.category}</span>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-light-muted text-sm mb-4">{post.excerpt}</p>

              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <User size={14} className="text-primary" />
                    <span className="text-light-muted">{post.author}</span>
                  </div>
                  <button className="ml-auto text-primary hover:underline text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
