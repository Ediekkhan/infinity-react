import React from 'react'; 
import { blogs } from '../lib/utils';

const Blog = () => {
 

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold sm:text-2xl sm:font-bold mb-8 text-center">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className=" text-sm font-semibold sm:text-2xl sm:font-bold mb-4">{blog.title}</h3>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img src="https://via.placeholder.com/40" alt={blog.author} className="w-10 h-10 rounded-full" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 text-sm">{blog.author}</p>
                  <p className="text-gray-600 text-sm">{blog.date}</p>
                </div>
              </div>
              <p className="text-gray-800 text-justify">{blog.content}</p>
              <a href={`/blog/${blog.id}`} className="text-blue-500 font-semibold hover:underline mt-4 inline-block">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
