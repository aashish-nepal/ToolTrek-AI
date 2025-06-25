export default async function handler(req, res) {
    const apiKey = process.env.DISQUS_API_KEY;
    const forum = process.env.DISQUS_FORUM;
    const accessToken = req.query.access_token;
    const limit = req.query.limit || 5; // Default to 5 if not specified

    try {
      let apiUrl;
      let responseData;
  
      if (accessToken) {
        // Fetch user's recent comments
        apiUrl = `https://disqus.com/api/3.0/users/listPosts.json?api_key=${apiKey}&access_token=${accessToken}&limit=${limit}&order=desc&related=thread`;
      } else {
        // Fetch forum's recent comments
        apiUrl = `https://disqus.com/api/3.0/posts/list.json?api_key=${apiKey}&forum=${forum}&limit=${limit}&order=desc&related=thread`;
      }
  
      const response = await fetch(apiUrl);
      responseData = await response.json();
  
      if (!responseData.code === 0) {
        throw new Error(responseData.response || 'Disqus API error');
      }
  
      const comments = responseData.response.map((comment) => {
        const thread = comment.thread || {};
        return {
          id: comment.id,
          author: {
            name: comment.author.name,
            avatar: comment.author.avatar.permalink,
          },
          text: comment.raw_message || comment.message,
          url: thread.link ? `${thread.link}#comment-${comment.id}` : `#comment-${comment.id}`,
          date: comment.createdAt,
        };
      });
  
      res.status(200).json(comments);
    } catch (error) {
      console.error('Disqus API Error:', error);
      res.status(500).json({ 
        message: 'Failed to fetch comments', 
        error: error.message,
        details: error.response?.data 
      });
    }
}