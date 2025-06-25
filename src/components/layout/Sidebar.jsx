import AffiliateBanner from '../affiliate/AffiliateBanner';
import AdSenseBanner from '../ads/AdSenseBanner';
import ToolComparisonBanner from '../tools/ToolComparisonBanner';
import AuthorBox from '../authors/AuthorBox';
import PopularPosts from '../bloggers/PopularPosts';
import { getTrendingArticles } from '../../lib/contentful';
import CategoryList from '../bloggers/CategoryList';
import RecentComments from '../bloggers/RecentComments';
import { useState, useEffect } from 'react';
import NewsletterSignup from '../monetization/NewsletterSignup';

const Sidebar = ({ trendingArticles: initialTrending = [] }) => {
  const [trending, setTrending] = useState(initialTrending);

  useEffect(() => {
    if (!initialTrending || initialTrending.length === 0) {
      console.log("🌀 Fetching trending articles client-side...");
      getTrendingArticles().then((articles) => {
        console.log("✅ Fetched trending client-side:", articles);
        setTrending(articles);
      });
    } else {
      console.log("✅ Using preloaded trending articles:", initialTrending);
    }
  }, [initialTrending]);


  const categories = [
    { name: "AI Writing Tools", count: 42, slug: "writing-tools", icon: "✍️", description: "Comprehensive reviews of AI-powered writing assistants and content generators" },
    { name: "Image Generation", count: 38, slug: "image-generation", icon: "🖼️", description: "Analysis of text-to-image AI systems and creative tools" },
    { name: "Coding Assistants", count: 29, slug: "coding-assistants", icon: "💻", description: "Evaluations of AI programming tools and code generators" },
    { name: "Video AI", count: 21, slug: "video-ai", icon: "🎥", description: "Reviews of AI video creation and editing platforms" },
    { name: "AI Business Tools", count: 18, slug: "business-tools", icon: "📊", description: "Productivity and enterprise AI solutions for businesses" },
  ];

  const featuredTools = [
    { 
      name: "ChatGPT-4", 
      logo: "/icons/chatgpt.png", 
      url: "/tools/chatgpt", 
      isSponsored: true, 
      rating: 4.8, 
      category: "Chatbots",
      description: "OpenAI's most advanced conversational AI with multimodal capabilities"
    },
    { 
      name: "Claude 3", 
      logo: "/icons/claude.png", 
      url: "/tools/claude", 
      isSponsored: false, 
      rating: 4.6, 
      category: "Chatbots",
      description: "Anthropic's safety-focused AI assistant with strong reasoning skills"
    },
    { 
      name: "Midjourney V6", 
      logo: "/icons/midjourney.png", 
      url: "/tools/midjourney", 
      isSponsored: true, 
      rating: 4.9, 
      category: "Image Generation",
      description: "Cutting-edge text-to-image AI with photorealistic output"
    },
    { 
      name: "Gemini Advanced", 
      logo: "/icons/gemini.png", 
      url: "/tools/gemini", 
      isSponsored: false, 
      rating: 4.5, 
      category: "Chatbots",
      description: "Google's most capable AI model with deep integration across Google services"
    },
  ];

  const upcomingEvent = {
    name: "AI Summit 2024: The Future of Artificial Intelligence",
    date: "2024-11-15T00:00:00",
    url: "/events/ai-summit-2024",
    location: "San Francisco & Virtual",
    image: "/images/ai-summit.jpg",
    description: "Annual conference bringing together AI researchers, developers, and industry leaders",
    organizer: "AI Innovation Foundation"
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPollOption, setSelectedPollOption] = useState("");
  const [pollSubmitted, setPollSubmitted] = useState(false);
  const [pollResults, setPollResults] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handlePollSubmit = (e) => {
    e.preventDefault();
    if (selectedPollOption) {
      // In a real app, you would send this to your backend
      setPollSubmitted(true);
      // Mock results for demonstration
      setPollResults({
        totalVotes: 1248,
        options: [
          { name: 'ChatGPT', votes: 624, percentage: 50 },
          { name: 'Claude', votes: 312, percentage: 25 },
          { name: 'Gemini', votes: 187, percentage: 15 },
          { name: 'Midjourney', votes: 62, percentage: 5 },
          { name: 'Other', votes: 63, percentage: 5 }
        ]
      });
    }
  };

  return (
    <>
      <aside className="space-y-6 sticky top-6" aria-label="Sidebar">
        {/* Search Bar with ARIA attributes */}
        <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <h2 className="sr-only">Search Articles</h2>
          <form onSubmit={handleSearch} className="relative" role="search">
            <label htmlFor="sidebar-search" className="sr-only">Search AI tools and articles</label>
            <input
              id="sidebar-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI tools and articles..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              aria-label="Search articles"
              autoComplete="off"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 text-gray-500 hover:text-indigo-700 transition-colors"
              aria-label="Submit search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </section>

        {/* Popular Posts with Schema.org markup */}
        {trending && trending.length > 0 ? (
        <PopularPosts posts={trending} title="Trending AI Articles" />
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Loading trending articles...</p>
        </div>
      )}
      
        {/* Categories/Tags List with semantic HTML */}
        <CategoryList 
          categories={categories} 
          title="Browse AI Categories" 
          showIcons={true}
          showCounts={true}
        />

        {/* Featured AI Tools with enhanced metadata */}
        <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Featured AI Tools</h2>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Updated Daily</span>
          </div>
          <ul className="space-y-3" itemScope itemType="http://schema.org/ItemList">
            {featuredTools.map((tool, index) => (
              <li key={tool.name} className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200 group" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <meta itemProp="position" content={index + 1} />
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-10 h-10 mr-3 object-contain rounded-sm bg-gray-100 p-1" 
                  loading="lazy"
                  width={40}
                  height={40}
                  itemProp="image"
                />
                <div className="flex-1 min-w-0" itemScope itemType="http://schema.org/SoftwareApplication">
                  <div className="flex items-start justify-between">
                    <a 
                      href={tool.url} 
                      className="block font-medium text-gray-800 hover:text-indigo-700 truncate"
                      itemProp="url"
                    >
                      <span itemProp="name">{tool.name}</span>
                    </a>
                    {tool.isSponsored && (
                      <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded" itemProp="isAccessibleForFree" content="false">Sponsored</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-sm flex items-center" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <meta itemProp="ratingValue" content={tool.rating.toString()} />
                        <meta itemProp="bestRating" content="5" />
                        ★ {tool.rating}
                      </span>
                      <span className="ml-2 text-xs text-gray-500" itemProp="applicationCategory">{tool.category}</span>
                    </div>
                    <a 
                      href={tool.url} 
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                      aria-label={`Try ${tool.name}`}
                    >
                      Try Now →
                    </a>
                  </div>
                  <meta itemProp="description" content={tool.description} />
                </div>
              </li>
            ))}
          </ul>
          <a 
            href="/ai-tools" 
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            aria-label="View all AI tools"
          >
            View all 200+ AI tools
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>

        {/* Tool Comparison Banner with semantic markup */}
        <ToolComparisonBanner 
          title="GPT-4 vs Claude 3 vs Gemini: Ultimate AI Comparison Guide"
          url="/comparisons/llm-showdown"
          ctaText="See Detailed Analysis"
          badgeText="New"
          image="/images/llm-comparison.jpg"
          className="hover:shadow-md transition-shadow duration-200"
          description="Comprehensive benchmark testing of leading AI language models in 2024"
        />

        {/* First AdSense Banner with proper labeling */}
        <AdSenseBanner 
          slotId="sidebar-top" 
          format="rectangle"
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          ariaLabel="Advertisement"
        />

        {/* Recent Comments with semantic markup */}
<RecentComments 
  title="Latest Community Discussions" 
  showAvatars={true}
  showTimestamps={true}
/>

        {/* Poll with accessible form */}
        <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-800">Community Poll</h2>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Live</span>
          </div>
          
          {!pollSubmitted ? (
            <>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Which AI tool do you use most frequently?</h3>
              <form onSubmit={handlePollSubmit} className="space-y-3">
                <fieldset>
                  <legend className="sr-only">AI tool preference poll</legend>
                  {['ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'Other'].map((option) => (
                    <div key={option} className="flex items-center">
                      <input 
                        id={`poll-${option}`} 
                        name="ai-tool-poll" 
                        type="radio" 
                        checked={selectedPollOption === option}
                        onChange={() => setSelectedPollOption(option)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        required
                      />
                      <label htmlFor={`poll-${option}`} className="ml-3 text-sm text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </fieldset>
                <button 
                  type="submit"
                  disabled={!selectedPollOption}
                  className={`mt-3 w-full py-2 px-4 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    selectedPollOption 
                      ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  aria-label="Submit poll vote"
                >
                  Submit Vote
                </button>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Poll Results ({pollResults.totalVotes} votes)</h3>
              <div className="space-y-4">
                {pollResults.options.map((option) => (
                  <div key={option.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{option.name}</span>
                      <span>{option.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${option.percentage}%` }}
                        aria-label={`${option.percentage} percent`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Thanks for participating! Poll updates in real-time.
              </p>
            </>
          )}
        </section>

        {/* Countdown to Event with Schema.org markup */}
        <section 
          className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          style={{
            backgroundImage: "linear-gradient(rgba(79, 70, 229, 0.9), rgba(124, 58, 237, 0.9)), url('/images/ai-pattern.png')",
            backgroundSize: "cover"
          }}
          itemScope
          itemType="http://schema.org/Event"
        >
          <div className="absolute top-0 right-0 text-xs bg-white text-indigo-800 px-2 py-1 rounded-bl-lg">
            Featured Event
          </div>
          <h2 className="font-semibold text-lg mb-2" itemProp="name">{upcomingEvent.name}</h2>
          <p className="text-sm font-medium mb-1" itemProp="description">{upcomingEvent.description}</p>
          <p className="text-xs text-indigo-100 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span itemProp="location" itemScope itemType="http://schema.org/Place">
              <span itemProp="name">{upcomingEvent.location}</span>
            </span>
          </p>
          <meta itemProp="startDate" content={upcomingEvent.date} />
          <meta itemProp="organizer" content={upcomingEvent.organizer} />
          <div className="flex justify-between text-center mb-4">
            <div className="bg-white bg-opacity-20 rounded p-2 flex-1 mx-1">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs opacity-90">Days</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 flex-1 mx-1">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs opacity-90">Hours</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 flex-1 mx-1">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs opacity-90">Mins</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded p-2 flex-1 mx-1">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs opacity-90">Secs</div>
            </div>
          </div>
          <a 
            href={upcomingEvent.url} 
            className="mt-2 inline-flex items-center justify-center w-full bg-white text-indigo-600 text-center py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-medium text-sm"
            aria-label={`Register for ${upcomingEvent.name}`}
            itemProp="url"
          >
            Register Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </section>

        {/* Community Links with proper semantics */}
        <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">Join Our AI Community</h2>
          <p className="text-sm text-gray-600 mb-3">Connect with 10,000+ AI enthusiasts, researchers, and developers</p>
          <div className="space-y-3">
            <a 
              href="https://discord.gg/your-community" 
              className="flex items-center justify-between bg-indigo-100 text-indigo-700 p-3 rounded-md hover:bg-indigo-200 transition-colors group"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join our Discord community"
            >
              <div className="flex items-center">
                <div className="bg-indigo-600 p-2 rounded-md mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium block">Discord Community</span>
                  <span className="text-xs text-indigo-600 opacity-80">Live discussions & AMAs</span>
                </div>
              </div>
              <span className="text-sm opacity-80 group-hover:opacity-100">2.5k+ members</span>
            </a>
            <a 
              href="https://slack.com/your-community" 
              className="flex items-center justify-between bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200 transition-colors group"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join our Slack channel"
            >
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-md mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 6.313 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM6.313 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 6.313 0a2.528 2.528 0 0 1 2.521 2.522v2.52H6.313zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H0A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h3.791zm8.834-1.271a2.528 2.528 0 0 1 2.522-2.52A2.528 2.528 0 0 1 24 2.522 2.528 2.528 0 0 1 21.479 5.042h-2.522V2.522zm-1.271 0a2.528 2.528 0 0 1-2.521 2.52 2.528 2.528 0 0 1-2.521-2.52V0A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v2.52zM15.165 21.479a2.528 2.528 0 0 1 2.521 2.521A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521H24a2.528 2.528 0 0 1 0 5.042h-8.835z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium block">Slack Channel</span>
                  <span className="text-xs text-blue-600 opacity-80">Professional network</span>
                </div>
              </div>
              <span className="text-sm opacity-80 group-hover:opacity-100">1.8k+ members</span>
            </a>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <a 
              href="/community" 
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center"
              aria-label="Explore all community options"
            >
              Explore all community options
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Newsletter Signup with enhanced metadata */}
        <NewsletterSignup
          title="Stay Updated on AI Developments"
          description="Subscribe to our newsletter for the latest AI news, tool reviews, and industry updates delivered weekly."
          className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 hover:shadow-md transition-shadow duration-200"
          bonus="Free AI Tools Checklist (PDF Download)"
          buttonVariant="primary"
          buttonSize="medium"
          privacyPolicyUrl="/privacy"
          successMessage="Thank you for subscribing! Your free download will arrive shortly."
        />

        {/* Monetized Tool Ads with clear disclosure */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg text-gray-800">Recommended AI Tools</h2>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">Tools we use and recommend in our workflow</p>
          <AffiliateBanner 
            items={[
              { 
                name: "Synthesia", 
                description: "AI Video Creation Platform", 
                url: "#", 
                logo: "/logos/synthesia.png", 
                rating: 4.7,
                disclosure: "We earn a commission for purchases"
              },
              { 
                name: "Jasper", 
                description: "AI Content Writer & Copy Assistant", 
                url: "#", 
                logo: "/logos/jasper.png", 
                rating: 4.5,
                disclosure: "Affiliate partnership"
              },
              { 
                name: "Copy.ai", 
                description: "Marketing Copy Generation Tool", 
                url: "#", 
                logo: "/logos/copyai.png", 
                rating: 4.3,
                disclosure: "Compensated affiliate link"
              }
            ]}
          />
          <p className="mt-2 text-xs text-gray-500">
            * Disclosure: We may earn a commission for purchases made through these links at no extra cost to you. This helps support our research and content creation.
          </p>
        </div>

        {/* Second AdSense Banner with proper labeling */}
        <AdSenseBanner 
          slotId="sidebar-bottom" 
          format="rectangle"
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          ariaLabel="Advertisement"
        />
      </aside>
    </>
  );
};

export default Sidebar;