import { getAllArticles } from '../../lib/contentful';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export async function getStaticPaths() {
  const posts = await getAllArticles();

  const paths = posts.map((post) => ({
    params: { slug: post.url.replace('/blog/', '') },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const posts = await getAllArticles();
  const post = posts.find((p) => p.url === `/blog/${params.slug}`);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60,
  };
}

export default function BlogPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <img
          src={post.image.startsWith('http') ? post.image : `https:${post.image}`}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-4">
          Published on {new Date(post.datePublished).toLocaleDateString()} · {post.views.toLocaleString()} views
        </div>
        <div className="prose prose-lg max-w-none">
        {post.body ? (
  <div className="prose prose-lg max-w-none">
    {documentToReactComponents(post.body)}
  </div>
) : (
  <p>No content available.</p>
)}
        </div>
      </div>
    </>
  );
}
