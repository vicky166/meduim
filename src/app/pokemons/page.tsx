"use client";

import { useEffect, useState } from "react";
import { Star, Clock, BookmarkIcon, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Paginationtable from "@/components/pagination";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [clicedPokemon, setSclicedPokemon] = useState<any[]>([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Following");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSclicedPokemon(pokemon.slice((page - 1) * 10, page * 10));
  };

  const totalPages = Math.ceil(pokemon.length / 10);

  const footerLinks = [
    { text: "Help", href: "#" },
    { text: "Status", href: "#" },
    { text: "About", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Press", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Terms", href: "#" },
    { text: "Text to speech", href: "#" },
    { text: "Teams", href: "#" },
  ];

  const navItems = [
    { text: "For you", href: "#" },
    { text: "Pokemon", href: "#" },
    { text: "Blogs", href: "" },
    { text: "Movies", href: "/movie" },
    { text: "Technologies", href: "#" },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/pokemon");

        const result = await response.json();
        setPokemon(result);
        setSclicedPokemon(result.slice(0, 10));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <section className="p-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <main className="flex-1">
          <div className="container sticky top-0 bg-white border-b">
            <div
              ref={scrollContainerRef}
              className="flex flex-1 items-center space-x-4 "
            >
              {navItems.map((item) => (
                <button
                  key={item.text}
                  onClick={() => setActiveTab(item.text)}
                  className={cn(
                    "relative whitespace-nowrap text-xs sm:text-sm transition-colors hover:text-foreground",
                    activeTab === item.text
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
          {clicedPokemon.slice(0, 10).map((pokemon) => (
            <div
              key={pokemon.id}
              className="space-y-6 pt-5 pb-6 hover:shadow-lg transition-all duration-300"
            >
              <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 p-2 space-y-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img/image.jpg?height=10&width=30"
                      alt="Pokemon Trainer"
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-500 font-medium">
                      By {pokemon.type}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                    <Link href={`/pokemon/${pokemon.id}`}>
                      Name: {pokemon.pokemon}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base">
                    <span className="font-semibold">Abilities:</span>{" "}
                    {pokemon.abilities}
                  </p>

                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 flex-wrap">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <Star
                        onClick={handleClick}
                        className={`h-5 w-5 transition-colors ${
                          isClicked ? "text-yellow-500" : "text-gray-500"
                        }`}
                      />
                      <span className="group-hover:text-gray-700">
                        {pokemon.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>5.2K views</span>
                    </div>

                    <div className="text-gray-400">64 comments</div>

                    <div className="flex-1"></div>

                    <button className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-all">
                      <BookmarkIcon className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                    </button>

                    <button className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-all">
                      <MoreHorizontal className="h-5 w-5 text-gray-500 hover:text-blue-500" />
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-auto">
                  <img
                    src={pokemon.image_url}
                    alt={pokemon.pokemon}
                    width={200}
                    height={200}
                    className="rounded-xl shadow-lg object-contain mx-auto"
                  />
                </div>
              </article>
            </div>
          ))}
          <Paginationtable
            currentPage={curentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>

        <aside className="hidden lg:block w-full lg:w-[368px]">
          <div className="space-y-8 sticky top-0">
            <section>
              <h2 className="font-bold mb-4">Staff Picks</h2>
              <div className="space-y-4">
                <div className="rounded-full flex items-center gap-3">
                  <Image
                    src="/img/image.jpg?height=20&width=20"
                    alt="Dr. Jess Greier"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">
                        Dr. Jess Greier
                      </span>
                    </div>
                    <h3 className="font-bold leading-snug">
                      I&aposm a Public Health Scientist. Here&aposs What
                      Research Really Shows About Raw Milk.
                    </h3>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-full flex items-center gap-3">
                  <Image
                    src="/img/image.jpg?height=20&width=20"
                    alt="Dr. Jess Greier"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="flex pt-5 items-center gap-1">
                      <span className="text-sm font-medium">
                        Dr. Jess Greier
                      </span>
                    </div>
                    <h3 className="font-bold leading-snug">
                      I&aposm a Public Health Scientist. Here&aposs What
                      Research Really Shows About Raw Milk.
                    </h3>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-full flex items-center gap-3">
                  <Image
                    src="/img/image.jpg?height=20&width=20"
                    alt="Dr. Jess Greier"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="flex pt-5 items-center gap-1">
                      <span className="text-sm font-medium">
                        Dr. Jess Greier
                      </span>
                    </div>
                    <h3 className="font-bold leading-snug">
                      I&aposm a Public Health Scientist. Here&aposs What
                      Research Really Shows About Raw Milk.
                    </h3>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold mb-4">Recommended topics</h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Programming
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Self Improvement
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Data Science
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Writing
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Technology
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  Relationships
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                >
                  politics
                </Link>
              </div>
              <div>
                <div className="pt-5">
                  <h5>
                    <Link
                      href="/suggestions"
                      className="text-black  hover:underline"
                    >
                      See More Topicxs
                    </Link>
                  </h5>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-bold mb-4">Who to follow</h2>
              <div className="flex items-center gap-3">
                <Image
                  src="/img/m.jpg?height=50&width=50"
                  alt="Raphael Moutard"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Raphael Moutard</h3>
                  <p className="text-sm text-gray-500">Description here</p>
                </div>
                <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                  Follow
                </button>
              </div>
              <div className="flex items-center pt-3 gap-3">
                <Image
                  src="/img/m.jpg?height=50&width=50"
                  alt="Raphael Moutard"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Raphael Moutard</h3>
                  <p className="text-sm text-gray-500">Description here</p>
                </div>
                <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                  Follow
                </button>
              </div>
              <div className="flex pt-3 items-center gap-3">
                <Image
                  src="/img/m.jpg?height=50&width=50"
                  alt="Raphael Moutard"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Raphael Moutard</h3>
                  <p className="text-sm text-gray-500">Description here</p>
                </div>
                <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                  Follow
                </button>
              </div>
              <div>
                <div className="pt-5">
                  <h5>
                    <Link
                      href="/suggestions"
                      className="text-black  hover:underline"
                    >
                      Show more suggestions
                    </Link>
                  </h5>
                </div>
              </div>
            </section>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Reading list</h2>
                <div className="flex items-start text-gray-600 text-sm">
                  <span>
                    click on any story to easily add it to your reading list or
                    a custom list that you can share.
                  </span>
                </div>
              </div>
              <footer className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500">
                {footerLinks.map((link) => (
                  <div key={link.text} className="flex items-center">
                    <Link
                      href={link.href}
                      className="hover:text-gray-700 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </div>
                ))}
              </footer>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
