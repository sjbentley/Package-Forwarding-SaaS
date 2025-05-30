
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import StoreFooter from '@/components/stores/StoreFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How Package Consolidation Can Save You Up to 80% on Shipping Costs",
    excerpt: "Learn how combining multiple packages into one shipment can dramatically reduce your international shipping expenses.",
    date: "May 10, 2025",
    author: "Max Mustermann",
    category: "Shipping Tips",
    readTime: "5 min read",
    slug: "package-consolidation-savings"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Shopping from US Stores",
    excerpt: "Discover the best American retailers that ship internationally and learn how to navigate their websites effectively.",
    date: "May 5, 2025",
    author: "Erika Musterfrau",
    category: "Shopping Guides",
    readTime: "8 min read",
    slug: "ultimate-us-shopping-guide"
  },
  {
    id: 3,
    title: "Understanding Customs and Import Duties When Shipping to Germany",
    excerpt: "Everything you need to know about German customs regulations, import taxes, and how to avoid unexpected charges.",
    date: "April 28, 2025",
    author: "Klaus Schmidt",
    category: "Customs & Regulations",
    readTime: "6 min read",
    slug: "german-customs-import-guide"
  },
  {
    id: 4,
    title: "5 Exclusive American Brands Now Available to German Shoppers",
    excerpt: "Explore these uniquely American brands that were previously difficult to access from Germany.",
    date: "April 15, 2025",
    author: "Sabine Weber",
    category: "Brand Spotlight",
    readTime: "4 min read",
    slug: "exclusive-american-brands"
  },
];

const Blog: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center text-deutscher-purple-light hover:text-deutscher-purple-light/80 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white">PakSend® Blog</h2>
            <div className="flex gap-3">
              <label htmlFor="category-select" className="sr-only">Select Category</label>
              <select id="category-select" className="bg-[#0D0F12] border border-white/10 text-white rounded-md px-3 py-1.5 text-sm" aria-label="Select Category">
                <option>All Categories</option>
                <option>Shipping Tips</option>
                <option>Shopping Guides</option>
                <option>Customs & Regulations</option>
                <option>Brand Spotlight</option>
              </select>
            </div>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Latest Posts</CardTitle>
              <CardDescription className="text-gray-400">Shipping insights, shopping tips, and more</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="bg-[#181B20] border border-white/5 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/20"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag size={12} />
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-deutscher-purple-light hover:text-white transition-colors text-sm"
                      >
                        Read more →
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#0D0F12] border border-white/10 text-white md:col-span-2">
              <CardHeader>
                <CardTitle>Featured Article</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-56 bg-gradient-to-br from-deutscher-purple/20 to-deutscher-purple-light/40 rounded-md"></div>
                <h3 className="text-xl font-medium text-white mt-4">The Future of Cross-Border E-commerce: Trends to Watch in 2025</h3>
                <p className="text-gray-300">
                  Global e-commerce is evolving rapidly, with new technologies and changing consumer 
                  preferences shaping the future of cross-border shopping. In this in-depth article, 
                  we explore the emerging trends that will define international online retail in 2025 
                  and beyond.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    May 12, 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    Dr. Julia Fischer
                  </span>
                  <span>12 min read</span>
                </div>
                <Link 
                  to="/blog/future-cross-border-ecommerce" 
                  className="inline-block mt-2 text-deutscher-purple-light hover:text-white transition-colors"
                >
                  Read full article →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D0F12] border border-white/10 text-white">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/category/shipping-tips" className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                      <span>Shipping Tips</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/category/shopping-guides" className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                      <span>Shopping Guides</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">9</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/category/customs-regulations" className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                      <span>Customs & Regulations</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">7</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/category/brand-spotlight" className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                      <span>Brand Spotlight</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/category/industry-news" className="flex justify-between items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                      <span>Industry News</span>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">4</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#0D0F12] border border-white/10 text-white">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-gray-400">Get the latest shipping tips and industry insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-[#181B20] border border-white/10 rounded-md px-4 py-2 text-white min-w-[200px]"
                />
                <button className="bg-deutscher-purple hover:bg-deutscher-purple-light transition-colors rounded-md px-4 py-2 text-white">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                By subscribing, you agree to receive marketing communications from PakSend®. 
                You can unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <StoreFooter />
    </div>
  );
};

export default Blog;