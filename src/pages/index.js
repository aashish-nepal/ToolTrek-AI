import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import NewsletterSignup from '../components/monetization/NewsletterSignup';
import AffiliateCard from '../components/affiliate/AffiliateCard';
import PremiumContent from '../components/monetization/PremiumContent';
import Testimonial from '../components/ui/Testimonial';
import Badge from '../components/ui/Badge';
import AdSenseBanner from '../components/ads/AdSenseBanner';
import AdSenseInArticle from '../components/ads/AdSenseInArticle';
import '../styles/globals.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from 'react-cookie-consent';

const HomePage = () => {
  // Initialize AdSense
  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      const ads = document.getElementsByClassName('adsbygoogle');
      let alreadyLoaded = false;
  
      for (let i = 0; i < ads.length; i++) {
        if (ads[i].getAttribute('data-adsbygoogle-status') === 'done') {
          alreadyLoaded = true;
          break;
        }
      }
  
      if (!alreadyLoaded) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('Adsense error:', e);
        }
      }
    }
  }, []);
  

  // Schema.org structured data for better SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Tools Hub",
    "url": "https://yourdomain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const featuredPosts = [
    {
      id: 1,
      title: "10 AI Tools That Will Transform Your Business in 2023",
      excerpt: "Discover the most powerful AI tools that can automate your workflows and boost productivity by 47% based on our case studies.",
      date: "2023-06-10",
      readTime: "5 min read",
      image: "/images/ai-business-tools.jpg",
      slug: "10-ai-tools-business-2023",
      category: "Productivity",
      author: "Dr. Sarah Chen",
      authorImage: "/images/authors/sarah-chen.jpg",
      schemaType: "Article"
    },
    {
      id: 2,
      title: "How to Use ChatGPT for Content Creation: A Complete Guide",
      excerpt: "Comprehensive guide with 12 proven ChatGPT prompts that helped our team increase content output by 300% without quality loss.",
      date: "2023-05-28",
      readTime: "8 min read",
      image: "/images/chatgpt-guide.jpg",
      slug: "chatgpt-content-creation-guide",
      category: "Tutorial",
      author: "Mark Johnson",
      authorImage: "/images/authors/mark-johnson.jpg",
      schemaType: "TechArticle"
    }
  ];

  const popularTools = [
    {
      id: 1,
      name: "Jasper AI",
      description: "The best AI writing assistant for marketers and content creators with 50+ templates",
      rating: 4.5,
      reviews: 1243,
      price: "$49/month",
      originalPrice: "$59/month",
      discount: true,
      image: "/images/jasper-logo.png",
      affiliateLink: "https://example.com/ref=jasperspecial",
      features: ["SEO-optimized content", "25+ languages", "Brand voice customization"],
      bestFor: "Content teams & marketers"
    },
    {
      id: 2,
      name: "Midjourney",
      description: "Create stunning AI-generated artwork with simple text prompts (V5 model support)",
      rating: 4.8,
      reviews: 2876,
      price: "$10/month",
      image: "/images/midjourney-logo.png",
      affiliateLink: "https://example.com/ref=midjourney",
      features: ["4K resolution", "Style presets", "Commercial license"],
      bestFor: "Designers & artists"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "This blog helped me find the perfect AI tools for my agency. We've saved over 20 hours per week!",
      name: "Alex Rivera",
      title: "CEO, Digital Solutions Inc.",
      image: "/images/testimonials/alex-rivera.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The in-depth tutorials helped my team implement AI solutions that increased our conversion rate by 35%.",
      name: "Priya Patel",
      title: "Marketing Director, TechCorp",
      image: "/images/testimonials/priya-patel.jpg",
      rating: 5
    }
  ];

  const seoProps = {
    title: "AI Tools Hub | Expert Reviews & Guides for Artificial Intelligence Tools 2023",
    description: "Get data-driven AI tool comparisons, expert tutorials, and productivity hacks. Join 50,000+ professionals who trust our independent reviews.",
    keywords: "AI tools 2023, artificial intelligence software, ChatGPT guides, AI productivity tools, machine learning applications",
    canonical: "https://yourdomain.com",
    openGraph: {
      type: "website",
      url: "https://yourdomain.com",
      title: "AI Tools Hub | Expert Reviews & Guides for Artificial Intelligence Tools 2023",
      description: "Get data-driven AI tool comparisons, expert tutorials, and productivity hacks.",
      images: [
        {
          url: "https://yourdomain.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AI Tools Hub - Master Artificial Intelligence"
        }
      ]
    },
    twitter: {
      cardType: "summary_large_image",
      handle: "@aitoolshub"
    }
  };

  return (
    <>
          <Head>
            {/* JSON-LD structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
    
            {/* Google AdSense Script (load once globally) */}
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUB_ID"
              crossOrigin="anonymous"
            />
    
            {/* Preload images */}
            <link rel="preload" href="/images/ai-business-tools.jpg" as="image" />
            <link rel="preload" href="/images/chatgpt-guide.jpg" as="image" />
    
            {/* hreflang tags for multilingual SEO */}
            <link rel="alternate" href="https://yourdomain.com" hrefLang="x-default" />
            <link rel="alternate" href="https://yourdomain.com" hrefLang="en" />
            <link rel="alternate" href="https://yourdomain.com/en-us" hrefLang="en-US" />
            <link rel="alternate" href="https://yourdomain.com/ne" hrefLang="ne" />
            <link rel="alternate" href="https://yourdomain.com/hi-in" hrefLang="hi-IN" />
          </Head>
    
    
      <Layout seoProps={seoProps}>
        <Analytics />

        {/* Cookie Consent Banner */}
        <CookieConsent
          location="bottom"
          buttonText="I Understand"
          cookieName="aiToolsHubCookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{ background: "#4e8cff", color: "#fff", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance your experience and display relevant ads.{" "}
          <a href="/privacy-policy" style={{ color: "#4e8cff" }}>Learn more</a>
        </CookieConsent>

        {/* Hero Section */}
        <header className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Master AI Tools &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Transform Your Workflow
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Data-driven reviews, expert tutorials, and productivity hacks for <span className="font-semibold">50,000+ professionals</span> leveraging AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button as="a" href="/tools" variant="primary" className="px-8 py-3 text-lg">
                Explore Top AI Tools →
              </Button>
              <Button as="a" href="/guides" variant="secondary" className="px-8 py-3 text-lg">
                Free Guides
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <img 
                    key={item}
                    src={`/images/avatars/avatar-${item}.jpg`} 
                    alt={`User ${item}`}
                    loading="lazy"
                    className="w-10 h-10 rounded-full border-2 border-blue-800"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-blue-200">Trusted by 50K+ professionals</p>
              </div>
            </div>
          </div>
        </header>

     {/* First AdSense Banner - After Testimonials */}
     <AdSenseBanner />

        {/* Featured Articles Section */}
        <section aria-labelledby="featured-articles-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Latest Research</Badge>
              <h2 id="featured-articles-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                Expert-Curated AI Content
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Data-backed insights and actionable strategies from our team of AI practitioners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => {
                const postSchema = {
                  "@context": "https://schema.org",
                  "@type": post.schemaType || "Article",
                  "headline": post.title,
                  "description": post.excerpt,
                  "datePublished": post.date,
                  "author": {
                    "@type": "Person",
                    "name": post.author,
                    "image": `https://yourdomain.com${post.authorImage}`
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "AI Tools Hub",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://yourdomain.com/logo.png"
                    }
                  },
                  "image": `https://yourdomain.com${post.image}`,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://yourdomain.com/blog/${post.slug}`
                  }
                };
                
                return (
                  <article key={post.id} className="group" itemScope itemType="https://schema.org/Article">
                    <script type="application/ld+json">
                      {JSON.stringify(postSchema)}
                    </script>
                    <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          itemProp="image"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <time dateTime={post.date} itemProp="datePublished">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3" itemProp="headline">
                          <a href={`/blog/${post.slug}`} className="hover:text-indigo-600" itemProp="url">
                            {post.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 mb-4" itemProp="description">{post.excerpt}</p>
                        <div className="mt-auto">
                          <div className="flex items-center">
                            <img 
                              src={post.authorImage} 
                              alt={post.author}
                              loading="lazy"
                              className="w-8 h-8 rounded-full mr-2"
                              itemProp="author"
                            />
                            <span className="text-sm text-gray-700" itemProp="author">{post.author}</span>
                          </div>
                          <a 
                            href={`/blog/${post.slug}`} 
                            className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                            aria-label={`Read more about ${post.title}`}
                          >
                            Read Case Study
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </Card>
                  </article>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <Button as="a" href="/blog" variant="outline" className="px-8 py-3">
                View All Research Articles
              </Button>
            </div>
          </div>
        </section>

        {/* In-Article Ad - Between Featured Articles and AI Tools */}
        <div className="bg-gray-50 py-8">
          <AdSenseInArticle />
        </div>

        {/* AI Tools Comparison Section */}
        <section aria-labelledby="ai-tools-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="primary" className="mb-4">Updated Weekly</Badge>
              <h2 id="ai-tools-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                AI Tools Comparison
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Independent, data-driven reviews of the top AI solutions in 2023.
              </p>
            </div>

            {/* Affiliate Disclosure */}
            <div className="text-center text-xs text-gray-500 mb-6 max-w-3xl mx-auto">
              Disclosure: We may earn a commission when you purchase through our affiliate links at no extra cost to you.
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {popularTools.map(tool => (
                <AffiliateCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Decide Which AI Tool is Right For You?</h3>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  Take our 2-minute quiz to get personalized AI tool recommendations based on your specific needs and budget.
                </p>
                <Button as="a" href="/ai-tool-quiz" variant="primary" className="px-8 py-3">
                  Start AI Tool Quiz →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading" className="py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
                Join thousands of professionals who transformed their workflows with our AI insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map(testimonial => (
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <img 
                src="/images/logos/forbes.png" 
                alt="Forbes" 
                loading="lazy"
                className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="/images/logos/techcrunch.png" 
                alt="TechCrunch" 
                loading="lazy"
                className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="/images/logos/entrepreneur.png" 
                alt="Entrepreneur" 
                loading="lazy"
                className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="/images/logos/inc.png" 
                alt="Inc. Magazine" 
                loading="lazy"
                className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </section>

        {/* Second AdSense Banner - After Testimonials */}
        <AdSenseBanner />

        {/* Newsletter Section with Lead Magnet */}
        <section aria-labelledby="newsletter-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 id="newsletter-heading" className="text-2xl font-bold text-gray-900 mb-4">
                    Get Our Free AI Tools Cheat Sheet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join 50,000+ professionals and receive our weekly newsletter with:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Exclusive AI tool discounts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Private beta invitations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Case studies from top companies</span>
                    </li>
                  </ul>
                  <div className="text-xs text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </div>
                </div>
                <div className="md:w-1/2">
                  <NewsletterSignup 
                    leadMagnet="Free AI Tools Cheat Sheet (PDF)" 
                    ctaText="Get My Free Cheat Sheet" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Content Section */}
        <section aria-labelledby="premium-content-heading" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Exclusive Content</Badge>
              <h2 id="premium-content-heading" className="text-3xl md:text-4xl font-bold">
                Premium AI Resources
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Access our in-depth courses, templates, and private community.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <PremiumContent />
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start implementing AI solutions today with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button as="a" href="/get-started" variant="white" className="px-8 py-4 text-lg font-semibold">
                Get Started for Free
              </Button>
              <Button as="a" href="/contact" variant="outline-white" className="px-8 py-4 text-lg font-semibold">
                Book Consultation
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;