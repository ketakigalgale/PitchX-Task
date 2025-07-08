export default function Sidebar() {
  return (
    <div className="w-80 min-h-screen  bg-gradient-to-br from-cyan-00 to-cyan-900  bg-blue text-white p-10 space-y-6 rounded-tr-4xl border-r border-gray-100">
     
      <section>
        <h2 className="text-xl font-semibold text-gray-100 mb-1">📊 Dashboard</h2>
        <p className="text-gray-300">
          Hey, <span className="font-semibold text-white">Ketaki 👋</span>
        </p>
        <p className="text-sm text-gray-100">Frontend Developer</p>
        <p className="mt-1 text-sm text-gray-100">Posts : 6 | Likes : 120 </p>
      </section>

     
      <section>
        <h2 className="text-lg font-semibold text-gray-100 mb-2">🏆 Leaderboard</h2>
        <ol className="space-y-1 text-sm text-gray-300">
          <li>1. <span className="text-white font-medium">Prisha</span> - 420 pts</li>
          <li>2. <span className="text-white font-medium">Aditya</span> - 398 pts</li>
          <li>3. <span className="text-cyan-400 font-medium">You</span> - 376 pts</li>
          <li>4. <span className="text-white font-medium">Shruti</span> - 355 pts</li>
          <li>5. <span className="text-white font-medium">Shreya</span> - 320 pts</li>
        </ol>
      </section>

      
      <section>
        <h2 className="text-lg font-semibold text-white-100 mb-2">🧩 Top Projects</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>📈 Finance Tracker</li>
          <li>🛒 E-Commerce Frontend</li>
          <li>🗓️ Reminder App </li>
        </ul>
      </section>

     
      <section>
        <h2 className="text-lg font-semibold text-white-100 mb-2">💡 Top Skills</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-800 text-green px-2 py-1 rounded-full">React</span>
          <span className="bg-gray-800 text-green px-2 py-1 rounded-full">Tailwind</span>
          <span className="bg-gray-800 text-green px-2 py-1 rounded-full">JavaScript</span>
          <span className="bg-gray-800 text-green px-2 py-1 rounded-full">GitHub</span>
        </div>
      </section>

      
      <section>
        <h2 className="text-lg font-semibold text-white-100 mb-2">🔍 Filter Projects</h2>
        <select className="w-full bg-black border border-gray-500 text-gree-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option>Recent</option>
          <option>Most Liked</option>
          <option>By Category</option>
        </select>
      </section>
    </div>
  );
}
