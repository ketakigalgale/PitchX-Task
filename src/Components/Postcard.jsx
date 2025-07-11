import React from 'react';

function PostCard({ post }) {
  return (
  <div>
  

    <div className="h-90 w-80 relative bg-gradient-to-br from-blue-00 to-cyan-900 backdrop-blur-3xl rounded-[3rem] p-10 border border-gray-100 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-y-5 hover:bg-purple-900/10 hover:border-gray-900 overflow-hidden" >
    
       <h2 className=" text-gray-100 text-3xl mb-6">{post.title}</h2>

      <p className="text-gray-300 mb-6">{post.description}</p>

      {post.type === 'project' && (
        <a href={post.link} className="text-green-400 underline" target="_blank" rel="noreferrer">
          🔗 View Project on GitHub
        </a>
      )}
      {post.type === 'certification' && (
        <a href={post.link} className="text-green-400 underline" target="_blank" rel="noreferrer">
          📜 View Certificate
        </a>
      )}

      {post.type === 'coding-rank' && (
        <a href={post.link} className="text-green-400 underline" target="_blank" rel="noreferrer">
          🧠 View Coding Profile
        </a>
      )}

      {post.type === 'research' && (
        <a href={post.link} className="text-green-400 underline" target="_blank" rel="noreferrer">
          📖 Read Research Paper
        </a>
      )}

      {post.type === 'internship' && (
        <a href={post.link} className="text-green-400 underline" target="_blank" rel="noreferrer">
          💼 View Offer Letter
        </a>
      )}

<div className="mt-6 flex gap-6 text-sm text-gray-300">
        <button className="hover:text-gray-600">❤️ Like</button>
        <button className="hover:text-gray-600">💬 Comment</button>
        <button className="hover:text-gray-600">💾 Save</button>

      </div>

    
      <div className="mt-7 flex flex-wrap gap-6">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-gray-100 px-2 py-1 rounded rounded-[3rem] border border-gray-100"
          >
            #{tag}
          </span>
        ))}
      </div></div>



    </div>
  );
}

export default PostCard;
