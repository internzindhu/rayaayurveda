import Navbar from "../components/Navbar";

export default function Blogs() {
  const blogPosts = [
    {
      title: "Understanding Your Dosha: A Beginner's Guide",
      excerpt: "Discover the three doshas in Ayurveda and learn how to identify your unique constitution...",
      date: "December 1, 2024",
      category: "Ayurveda Basics",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "5 Morning Rituals for Better Health",
      excerpt: "Start your day the Ayurvedic way with these simple yet powerful morning practices...",
      date: "November 28, 2024",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Healing Power of Ayurvedic Herbs",
      excerpt: "Explore the most powerful herbs used in Ayurveda and their health benefits...",
      date: "November 20, 2024",
      category: "Herbs & Remedies",
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#181818] mb-4">Wellness Blog</h1>
          <p className="text-xl text-gray-700">Insights and wisdom from the world of Ayurveda</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#EAE9E3] text-[#5E17EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-[#5E17EB] hover:text-[#4B12BD] font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">More articles coming soon!</p>
          <button className="bg-[#5E17EB] hover:bg-[#4B12BD] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

