import { getAllAiTools } from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const tools = await getAllAiTools();

  const sanitizedTools = tools.map(tool => ({
    ...tool,
    image: tool.image 
      ? tool.image.startsWith('//') 
        ? `https:${tool.image}` 
        : tool.image.startsWith('http') 
          ? tool.image 
          : null 
      : null,
  }));

  return {
    props: { tools: sanitizedTools },
    revalidate: 60,
  };
}

export default function AiToolsPage({ tools }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AI Tools Directory
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Curated collection of the most powerful AI tools
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                {tool.image ? (
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={400}
                    height={225}
                    className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-56 flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {tool.name}
                  </h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 ml-2">
                    AI
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>
                
                <div className="mt-6 flex items-center justify-between">
                  <Link 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm group-hover:underline"
                  >
                    Visit Website
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tools.length === 0 && (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No tools found</h3>
            <p className="mt-1 text-gray-500">We couldn't find any AI tools in our directory.</p>
          </div>
        )}
      </div>
    </div>
  );
}