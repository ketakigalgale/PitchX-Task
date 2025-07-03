import React from 'react';

import Sidebar from './Components/Sidebar';
import posts from './data/posts.json';
import PostCard from './Components/Postcard';

function App() {
  return (
    
    <div className="bg-black flex">
     <Sidebar />
<main className="p-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;

