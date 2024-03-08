import React, { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  name?: string;
  description: string;
  image?: string;
}

export interface BlogPostProps {
  blogPost: BlogPostProps[];
}

const useBlogPosts: () => BlogPostProps = () => {
  const [blogPost, setBlogPost] = useState<BlogPostProps[]>([]);

  useEffect(() => {
    fetch("https://mitnog-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogPost(data));
  }, []);
  return { blogPost };
};

export default useBlogPosts;
