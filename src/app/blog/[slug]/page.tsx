"use client";
import { Bookmark, Play, Share2, MoreHorizontal, MessageSquare, PlayIcon as Clap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  author: string;
  date_published: string;
  content: string;
  image?: string;
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const [blog, setBlog] = useState<Blog | null>(null); // Use the Blog type

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.online/api/blogposts/${slug}`
        );
        const result = await response.json();
        setBlog(result);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-lg font-medium text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <article className="w-full mt-16 sm:mt-20 max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{blog.title}</h1>
        <div className="flex items-center justify-between mt-6 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-6">
            <Image
              src="/img/man.webp?height=60&width=60"
              alt="Author"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-medium text-gray-800">{blog.author}</span>
                <Button
                  variant="outline"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-full text-sm sm:text-md"
                >
                  Follow
                </Button>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                <span>{blog.date_published}</span> · <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blog.image && (
        <div className="mb-12 sm:mb-16">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1920}
            height={1080}
            className="w-full h-[500px] sm:h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      )}

      <div className="prose max-w-none mb-16 text-gray-700 text-lg sm:text-xl leading-relaxed">
        <p>{blog.content}</p>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 pt-8 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
              <Clap className="w-8 h-8 text-blue-600" />
            </Button>
            <span className="text-lg text-blue-600">2.1K</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </Button>
            <span className="text-lg text-blue-600">82</span>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
            <Bookmark className="w-8 h-8 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
            <Play className="w-8 h-8 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
            <Share2 className="w-8 h-8 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-gray-100 rounded-full transition duration-300">
            <MoreHorizontal className="w-8 h-8 text-blue-600" />
          </Button>
        </div>
      </div>
    </article>
  );
}
