"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Paginationtable from "@/components/pagination";
import { cn } from "@/lib/utils";

interface Movie {
  year: string | number;
  awards: string;
  runtime: string;
  plot: string;
  actors: string[];
  director: string;
  genre: string[];
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  posterUrl?: string;
}

export default function Movies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState("For You");
  const [showScrollButtons, setShowScrollButtons] = useState({
    left: false,
    right: false,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const navItems = ["For You", "Blog", "Movies", "Data Science", "Technology"];
  const moviesPerPage = 10;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowScrollButtons({
        left: container.scrollLeft > 0,
        right:
          container.scrollLeft + container.clientWidth < container.scrollWidth,
      });
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/movies");
      const result: Partial<Movie>[] = await response.json(); // Use Partial<Movie>[] for flexibility
      
      const formattedMovies: Movie[] = result.map((movie) => ({
        year: movie.year || "Unknown",
        awards: movie.awards || "N/A",
        runtime: movie.runtime || "Unknown",
        plot: movie.plot || "No plot available",
        actors: movie.actors || [],
        director: movie.director || "Unknown",
        genre: movie.genre || [],
        id: movie.id ?? -1, // Provide a default value
        title: movie.title || "Untitled",
        description: movie.description || "No description available",
        releaseDate: movie.releaseDate || "Unknown",
        posterUrl: movie.posterUrl || undefined,
      }));

      setMovies(formattedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", updateScrollButtons);
    return () => container?.removeEventListener("scroll", updateScrollButtons);
  }, []);
  
  return (
    <section className="p-6 md:p-8 md:ml-[200px]">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <main className="flex-1">
          <div className="relative flex items-center gap-2 border-b bg-background">
            {showScrollButtons.left && (
              <button
                onClick={() =>
                  scrollContainerRef.current?.scrollBy({
                    left: -200,
                    behavior: "smooth",
                  })
                }
                className="btn"
              >
                <ChevronLeft />
              </button>
            )}
            <div
              ref={scrollContainerRef}
              className="flex space-x-4 overflow-x-auto"
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={cn(
                    "px-3 py-2 text-sm hover:text-foreground",
                    activeTab === item
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            {showScrollButtons.right && (
              <button
                onClick={() =>
                  scrollContainerRef.current?.scrollBy({
                    left: 200,
                    behavior: "smooth",
                  })
                }
                className="btn"
              >
                <ChevronRight />
              </button>
            )}
          </div>

          <div className="space-y-6">
            {movies
              .slice(
                (currentPage - 1) * moviesPerPage,
                currentPage * moviesPerPage
              )
              .map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col md:flex-row gap-6 border-b py-6"
                >
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500">
                      <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <div className="text-gray-600 space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Year:</span>{" "}
                        {movie.year}
                      </p>
                      <p>
                        <span className="font-semibold">Genre:</span>{" "}
                        {movie.genre.join(", ")}
                      </p>
                      <p>
                        <span className="font-semibold">Director:</span>{" "}
                        {movie.director}
                      </p>
                      <p>
                        <span className="font-semibold">Actors:</span>{" "}
                        {movie.actors.join(", ")}
                      </p>
                      <p>
                        <span className="font-semibold">Plot:</span>{" "}
                        {movie.plot}
                      </p>
                      <p>
                        <span className="font-semibold">Runtime:</span>{" "}
                        {movie.runtime} minutes
                      </p>
                      <p>
                        <span className="font-semibold">Awards:</span>{" "}
                        {movie.awards}
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/img/download.jpeg"
                    alt="Movie Poster"
                    width={220}
                    height={310}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
          </div>

          <Paginationtable
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>

        <aside className="hidden lg:block md:mr-[200px] w-full lg:w-[300px]">
          <div className="space-y-8 sticky top-0">
            {["Staff Picks", "Recommended Topics", "Who to follow"].map(
              (sectionTitle, idx) => (
                <section key={idx}>
                  <h2 className="font-bold mb-4">{sectionTitle}</h2>
                  {sectionTitle === "Staff Picks" &&
                    ["Dr. Jess Steier", "Dr. Jess Steier", "The Medium"].map(
                      (author, index) => (
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
                            <h3 className="font-bold text-sm">
                              I’m a Public Health Scientist. Here’s What
                              Research Really Shows About Raw Milk.
                            </h3>
                            <span className="text-sm text-gray-500">
                              1d ago
                            </span>
                          </div>
                        </div>
                      )
                    )}
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
                      {[
                        "Raphael Moutard",
                        "Raphael Moutard",
                        "Raphael Moutard",
                      ].map((name, idx) => (
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
                            <p className="text-sm text-gray-500">
                              Description here
                            </p>
                          </div>
                          <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                            Follow
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </section>
              )
            )}
            <div className="pt-5">
              <h5>
                <Link
                  href="/suggestions"
                  className="text-black hover:underline"
                >
                  Show more suggestions
                </Link>
              </h5>
            </div>
          </div>

          <div className="space-y-6"></div>
        </aside>
      </div>
    </section>
  );
}
