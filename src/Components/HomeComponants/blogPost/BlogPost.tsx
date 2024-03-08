import useBlogPosts from "@/Hooks/useBlogPosts";
import React from "react";
import { BlogPostProps } from "@/Hooks/useBlogPosts";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { truncateText } from "../../../../app/(home)/all-products/ProductDisplay";

interface BlogPostP {
  blogpost: BlogPostProps[];
}

export const truncateBlogDecs = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};
const BlogPost: React.FC<BlogPostP> = () => {
  const { blogPost } = useBlogPosts();
  const textMaxLengthDesc = 400;
  const textMaxLengthTitle = 30;

  console.log("blog post", blogPost);

  return (
    <div className="container">
      <h3 className="text-base font-bold my-4 md:text-2xl">BlogPost</h3>
      <div className="grid grid-cols-3">
        {blogPost.slice(0, 3).map((posts) => (
          <div className="w-5/6" key={posts.id}>
            <Image
              src={posts?.image}
              width={300}
              height={100}
              alt={posts.name}
              className="rounded my-3"
            />
            <h2 className="text-lg font-bold">
              {truncateText(posts.name, textMaxLengthTitle)}
            </h2>
            <p>{truncateBlogDecs(posts.description, textMaxLengthDesc)}</p>
            <button className="text-white grid grid-cols-1 md:flex items-center gap-2 my-4 p-2 bg-sky-300 rounded hover:bg-blue-600  ">
              <span>Read More</span>
              <FaArrowRight className="hover:translate-x-1 transition-all" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
