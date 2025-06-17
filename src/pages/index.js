import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import NewsletterSignup from '../components/monetization/NewsletterSignup';
import AffiliateCard from '../components/affiliate/AffiliateCard';
import PremiumContent from '../components/monetization/PremiumContent';
import '../styles/globals.css';
import { useEffect } from 'react';


const HomePage = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-YOUR_PUB_ID");
    document.head.appendChild(script);
  }, []);

  
  const featuredPosts = [
    {
      id: 1,
      title: "10 AI Tools That Will Transform Your Business in 2023",
      excerpt: "Discover the most powerful AI tools that can automate your workflows and boost productivity.",
      date: "June 10, 2023",
      readTime: "5 min read",
      image: "/images/ai-business-tools.jpg",
      slug: "10-ai-tools-business-2023"
    },
    {
      id: 2,
      title: "How to Use ChatGPT for Content Creation: A Complete Guide",
      excerpt: "Learn how to leverage ChatGPT to create high-quality content faster than ever before.",
      date: "May 28, 2023",
      readTime: "8 min read",
      image: "/images/chatgpt-guide.jpg",
      slug: "chatgpt-content-creation-guide"
    }
  ];

  const popularTools = [
    {
      id: 1,
      name: "Jasper AI",
      description: "The best AI writing assistant for marketers and content creators",
      rating: 4.5,
      reviews: 1243,
      price: "$49/month",
      originalPrice: "$59/month",
      discount: true,
      image: "/images/jasper-logo.png",
      affiliateLink: "https://example.com/ref=jasperspecial"
    },
    {
      id: 2,
      name: "Midjourney",
      description: "Create stunning AI-generated artwork with simple text prompts",
      rating: 4.8,
      reviews: 2876,
      price: "$10/month",
      image: "/images/midjourney-logo.png",
      affiliateLink: "https://example.com/ref=midjourney"
    }
  ];

  return (
    <Layout seoProps={{
      title: "AI Tools Blog - Latest in Artificial Intelligence & Technology",
      description: "Discover the best AI tools, tutorials, and guides to boost your productivity and stay ahead in technology.",
      keywords: "AI tools, artificial intelligence, technology blog, AI reviews",
      canonical: "/",
      url: "https://yourdomain.com"
    }}>
      <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master AI Tools & Technology</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the best AI tools, in-depth reviews, and practical guides to transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as="a" href="/tools" variant="white">
              Explore AI Tools
            </Button>
            <Button as="a" href="/blog" variant="outline-white">
              Read Our Blog
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <Card key={post.id}>
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <a href={`/blog/${post.slug}`} className="hover:text-indigo-600">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Read More →
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button as="a" href="/blog" variant="outline">
              View All Articles
            </Button>
          </div>
        </div>
      </section>



      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recommended AI Tools</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {popularTools.map(tool => (
              <AffiliateCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button as="a" href="/tools" variant="outline">
              Browse All Tools
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <NewsletterSignup />
        </div>
      </section>
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Content</h2>
          <div className="max-w-2xl mx-auto">
            <PremiumContent />
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default HomePage;