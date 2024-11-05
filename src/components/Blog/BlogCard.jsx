import PropTypes from "prop-types";
import { Calendar, Tag } from "lucide-react";

const BlogCard = ({ post }) => {
  return (
    <article className="bg-dark-lighter rounded-xl overflow-hidden group">
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

        <button className="text-primary hover:underline text-sm">
          Read More
        </button>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
