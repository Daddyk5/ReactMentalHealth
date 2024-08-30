import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Simulate a delay to show loading state
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Example data from mock API responses
        const mockPosts = [
          {
            id: 1,
            author: "Dr. John Smith",
            title: "Understanding Anxiety Disorders",
            body: "Anxiety disorders can have a significant impact on daily life. It's important to recognize symptoms and seek help. This blog post explores various types of anxiety disorders and provides insights into their symptoms, causes, and treatment options.",
            date: "2024-06-23"
          },
          {
            id: 2,
            author: "Dr. Emily Brown",
            title: "Coping Strategies for Stress Management",
            body: "Effective stress management techniques can improve mental well-being. Discover strategies that work for you. This blog post discusses practical tips for managing stress, including mindfulness exercises, time management techniques, and relaxation methods.",
            date: "2024-06-22"
          },
          {
            id: 3,
            author: "Motivational Speaker Sarah Johnson",
            title: "Overcoming Depression: A Journey of Hope",
            body: "Depression is a challenging journey, but with support and determination, it is possible to overcome and find hope. This blog post shares personal stories of individuals who have successfully battled depression and offers guidance on seeking help and building resilience.",
            date: "2024-06-21"
          },
          {
            id: 4,
            author: "XXXTentacion",
            title: "Motivation and Self-Reflection",
            body: "In life, there are ups and downs. It's important to stay strong through it all.",
            date: "2024-06-20"
          },
        ];

        setBlogs(mockPosts);
      } catch (error) {
        console.error('Error retrieving blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleLike = (postId) => {
    // Placeholder for like functionality (can be implemented later)
    console.log(`Liked post ${postId}`);
  };

  const handleShare = (postId) => {
    // Placeholder for share functionality (can be implemented later)
    console.log(`Shared post ${postId}`);
  };

  const toggleExpanded = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  if (loading) {
    return <div className="blog-loading">Loading...</div>;
  }

  return (
    <div className="blog-container">
      {blogs.map(blog => (
        <div key={blog.id} className="blog-post">
          <h2>{blog.title}</h2>
          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Date:</strong> {blog.date}</p>
          {expandedPostId === blog.id ? (
            <div>
              <p>{blog.body}</p>
              <p><a href="#" onClick={() => toggleExpanded(blog.id)}>Show less</a></p>
            </div>
          ) : (
            <div>
              <p>{blog.body.substring(0, 180)}... <a href="#" onClick={() => toggleExpanded(blog.id)}>Read more</a></p>
            </div>
          )}
          <div className="blog-actions">
            <button onClick={() => handleLike(blog.id)}>Like</button>
            <button onClick={() => handleShare(blog.id)}>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
