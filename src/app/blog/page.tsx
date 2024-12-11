"use client";

import { ReactNode, useEffect, useState } from "react";
import { Star, Clock, BookmarkIcon, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Paginationtable from "@/components/pagination";

interface BlogPost {
  date_published: ReactNode;
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string; 
  imageUrl?: string; 
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("blog");
  const [clickedBlogs, setClickedBlogs] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setClickedBlogs(blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage));
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/blogposts");
        const result: BlogPost[] = await response.json(); 
        setBlogs(result);
        setClickedBlogs(result.slice(0, blogsPerPage));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <section className="p-8 lg:ml-[200px]">
      <div className="container mx-auto px-4 md:px-6 py-4 flex gap-8 flex-wrap lg:flex-nowrap">
        <main className="flex-1">
          <div className="sticky top-0  flex gap-6 border-b mb-8">
            {["blog", "movies", "pokemon"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm text-gray-500 pb-2 ${activeTab === tab ? "border-b-2 border-black font-bold" : ""}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "blog" && (
            <div>
              {clickedBlogs.map(blog => (
                <div key={blog.id} className="space-y-20 mb-8">
                  <article className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-100 p-1 rounded">
                          <Image
                            src="/img/image.jpg"
                            alt="Dr. Jess Greier"
                            width={20}
                            height={20}
                            className="rounded-full object-cover"
                          />
                        </span>
                        <span className="text-sm">in Stackoverflow</span>
                        <span className="text-sm text-gray-500">by {blog.author}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-1">{blog.title}</h2>
                      <p className="text-gray-500 text-sm mb-2">{blog.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1 group">
                          <Star
                            onClick={() => setIsClicked(!isClicked)}
                            className={`h-4 w-4 transition-colors ${isClicked ? "text-yellow-500" : "text-gray-500"}`}
                          />
                          <span>{blog.date_published}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>5.2K views</span>
                        </div>
                        <div>64 comments</div>
                        <div className="flex-1"></div>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <BookmarkIcon className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/img/download.jpg?height-60&width=200"
                      alt="Article thumbnail"
                      width={200}
                      height={60}
                      className="rounded"
                    />
                  </article>
                </div>
              ))}
            </div>
          )}

          <Paginationtable
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>

        <aside className="hidden lg:block md:mr-[200px] w-full lg:w-[300px]">
          <div className="space-y-8 sticky top-0">
            {["Staff Picks", "Recommended Topics", "Who to follow"].map((sectionTitle, idx) => (
              <section key={idx}>
                <h2 className="font-bold mb-4">{sectionTitle}</h2>
                {sectionTitle === "Staff Picks" && ["Dr. Jess Steier", "Dr. Jess Steier", "The Medium"].map((author, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/img/image.jpg"
                        alt="Staff Pick"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm">{author}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">I’m a Public Health Scientist. Here’s What Research Really Shows About Raw Milk.</h3>
                      <span className="text-sm text-gray-500">1d ago</span>
                    </div>
                  </div>
                ))}
                {sectionTitle === "Recommended Topics" && (
                  <div className="flex flex-wrap gap-2">
                    {["Blog", "Movie", "Pokemon"].map((topic) => (
                      <Link
                        key={topic}
                        href="#"
                        className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                )}
                {sectionTitle === "Who to follow" && (
                  <>
                    {["Raphael Moutard", "Raphael Moutard", "Raphael Moutard"].map((name, idx) => (
                      <div key={idx} className="flex items-center pt-3 gap-3">
                        <Image
                          src="/img/m.jpg?height=50&width=50"
                          alt={name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{name}</h3>
                          <p className="text-sm text-gray-500">Description here</p>
                        </div>
                        <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                          Follow
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </section>
            ))}
            <div className="pt-5">
              <h5>
                <Link href="/suggestions" className="text-black hover:underline">Show more suggestions</Link>
              </h5>
            </div>
          </div>

          <div className="space-y-6">
          </div>
        </aside>
      </div>
    </section>
  );
}
