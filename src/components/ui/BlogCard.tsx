import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  category: string;
  readTime: number;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  category,
  readTime,
}: BlogCardProps) => {
  return (
    <motion.div 
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${id}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-2 left-2 bg-moobucks-green text-white text-xs font-bold px-2 py-1 rounded">
            {category}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="text-sm">
              <p className="text-gray-900 font-medium">{author.name}</p>
              <p className="text-gray-500">{date} · {readTime} min read</p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex justify-end">
            <span className="text-moobucks-green font-medium hover:underline">Read More</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;