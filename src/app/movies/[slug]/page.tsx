'use client'

import { useEffect, useState } from "react"
import { Bookmark, Play, Share2, Star } from 'lucide-react'

// Define the Movie interface
interface Movie {
  title: string;
  year: number;
  runtime: number;
  rating: number;
  genre: string[];
  director: string;
  actors: string[];
  plot: string;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  poster: string;
  website: string;
  trailer: string;
}

export default function Movies({ params }: { params: Promise<{ slug: string }> }) {
    const [slug, setSlug] = useState<string | null>(null)
    const [movie, setMovie] = useState<Movie | null>(null) // Use Movie type instead of any

    useEffect(() => {
        params.then((resolvedParams) => {
            setSlug(resolvedParams.slug)
        })
    }, [params])

    useEffect(() => {
        if (!slug) return

        const fetchMoviePost = async () => {
            try {
                const response = await fetch(
                    `https://freetestapi.com/api/v1/movies/${slug}`
                )
                const result = await response.json()
                setMovie(result)
            } catch (error) {
                console.error("Error fetching movies post:", error)
            }
        }

        fetchMoviePost()
    }, [slug])

    if (!movie) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">{movie.title}</h1>
                        <p className="text-sm text-gray-500 mt-1">{movie.year} • {movie.runtime} min</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-yellow-600">
                            <Star className="w-4 h-4 mr-1" />
                            {movie.rating}
                        </div>
                        <button className="p-2 border rounded hover:bg-gray-100">
                            <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-100">
                            <Play className="w-4 h-4" />
                        </button>
                        <button className="p-2 border rounded hover:bg-gray-100">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                        <img
                            src={movie.poster || "/placeholder.svg"}
                            alt={`${movie.title} poster`}
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <p><strong>Genre:</strong> {movie.genre.join(", ")}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Actors:</strong> {movie.actors.join(", ")}</p>
                        <p><strong>Plot:</strong> {movie.plot}</p>
                        <p><strong>Awards:</strong> {movie.awards}</p>
                        <p><strong>Country:</strong> {movie.country}</p>
                        <p><strong>Language:</strong> {movie.language}</p>
                        <p><strong>Box Office:</strong> {movie.boxOffice}</p>
                        <p><strong>Production:</strong> {movie.production}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <a href={movie.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Official Website
                            </a>
                            <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Trailer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
