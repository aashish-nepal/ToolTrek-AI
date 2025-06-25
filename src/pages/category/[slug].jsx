import { useRouter } from 'next/router'
import { getCategoryBySlug, getAllCategoriesWithCount } from '../../lib/contentful'
import CategoryList from '../../components/bloggers/CategoryList'
import Head from 'next/head'

export async function getServerSideProps({ params }) {
  try {
    const { tools, allCategories, category } = await getCategoryBySlug(params.slug)
    return {
      props: {
        tools: tools || [],
        categories: allCategories || [],
        selectedCategory: category?.name || params.slug,
        error: null
      }
    }
  } catch (error) {
    console.error('Error fetching category data:', error)
    return {
      props: {
        tools: [],
        categories: [],
        selectedCategory: params.slug,
        error: 'Failed to load category data'
      }
    }
  }
}

export default function CategoryPage({ tools, categories, selectedCategory, error }) {
  const router = useRouter()
  const formattedCategoryName = selectedCategory.replace(/-/g, ' ')

  return (
    <>
      <Head>
        <title>{`${formattedCategoryName} AI Tools | Professional AI Directory`}</title>
        <meta name="description" content={`Browse the best ${formattedCategoryName} AI tools curated by industry experts`} />
        <meta property="og:title" content={`${formattedCategoryName} AI Tools`} />
        <meta property="og:description" content={`Professional collection of ${formattedCategoryName} artificial intelligence solutions`} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <CategoryList 
                categories={categories} 
                title="Browse AI Categories" 
                showCounts={true} 
                currentCategory={selectedCategory}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <header className="border-b border-gray-100 pb-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight capitalize">
                      {formattedCategoryName}
                    </h1>
                    <p className="mt-2 text-gray-500 text-sm">
                      {tools.length} professional {tools.length === 1 ? 'tool' : 'tools'} in this category
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {categories.find(c => c.slug === selectedCategory)?.count || 0} Total
                    </span>
                  </div>
                </div>
              </header>

              {error ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 mb-6">
                    <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Loading Error</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">{error}</p>
                  <button
                    onClick={() => router.reload()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Retry
                  </button>
                </div>
              ) : tools.length > 0 ? (
                <ul className="space-y-4">
                  {tools.map((tool) => (
                    <li key={tool.name}>
                      <div className="group relative p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 ease-in-out">
                        <div className="flex items-start space-x-5">
                          {tool.icon && (
                            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                              <img
                                src={tool.icon}
                                alt=""
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between space-x-3">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {tool.name}
                              </h3>
                              {tool.isFeatured && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {tool.description}
                            </p>
                            {tool.tags?.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {tool.tags.map(tag => (
                                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6">
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Tools Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    We couldn't find any tools in this category yet. Check back later or browse other categories.
                  </p>
                  <button
                    onClick={() => router.push('/categories')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Browse Categories
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}