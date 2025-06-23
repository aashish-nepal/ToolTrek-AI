import { getTrendingArticles } from '../../lib/contentful';

export default async function handler(req, res) {
  try {
    const articles = await getTrendingArticles();
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching trending articles:', error);
    res.status(500).json({ error: 'Failed to load trending articles' });
  }
}
