import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/common/SEO';
import AdSenseInArticle from '../../components/ads/AdSenseInArticle';
import ShareButtons from '../../components/common/ShareButtons';
import AffiliateBanner from '../../components/affiliate/AffiliateBanner';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // In a real app, you would fetch this data based on the slug
  const post = {
    title: "The Ultimate Guide to AI Writing Tools in 2023",
    description: "Discover the best AI writing tools available today and how they can transform your content creation process.",
    content: `<p>Artificial Intelligence has revolutionized the way we create content. In this comprehensive guide, we'll explore the top AI writing tools that can help you generate high-quality content faster than ever before.</p>
              <h2>Why Use AI Writing Tools?</h2>
              <p>AI writing assistants can help you overcome writer's block, improve your writing quality, and save countless hours of work. They're particularly useful for content marketers, bloggers, and businesses that need to produce large volumes of content regularly.</p>
              <h2>Top 5 AI Writing Tools</h2>
              <h3>1. Jasper (formerly Jarvis)</h3>
              <p>Jasper is one of the most popular AI writing assistants on the market. It offers templates for various content types, including blog posts, social media content, and even video scripts.</p>
              <h3>2. Copy.ai</h3>
              <p>Copy.ai focuses on marketing copy and offers a free plan with limited features. It's great for generating ad copy, product descriptions, and email sequences.</p>`,
    date: "June 15, 2023",
    author: "Jane Smith",
    readTime: "8 min read",
    tags: ["AI Tools", "Content Creation", "Productivity"],
    image: "/images/ai-writing-tools.jpg"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "image": `https://yourblog.com${post.image}`,
    "publisher": {
      "@type": "Organization",
      "name": "AI Tools Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourblog.com/images/logo.png"
      }
    }
  };

  return (
    <Layout seoProps={{
      title: post.title,
      description: post.description,
      keywords: post.tags.join(', '),
      canonical: `/blog/${slug}`,
      ogImage: post.image,
      structuredData
    }}>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
              {/* Author image would go here */}
            </div>
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="flex space-x-2 mt-1">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="relative mb-8 rounded-lg overflow-hidden h-64 md:h-96 bg-gray-100">
          {/* Featured image */}
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <AdSenseInArticle />

        <div 
          className="prose max-w-none prose-lg prose-indigo"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <AdSenseInArticle />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <ShareButtons 
            url={`https://yourblog.com/blog/${slug}`}
            title={post.title}
          />
        </div>

        <div className="mt-12">
          <AffiliateBanner />
        </div>

        <div className="mt-12">
          <NewsletterSignup />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;