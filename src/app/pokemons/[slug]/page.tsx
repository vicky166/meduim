"use client";

import {
  Bookmark,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Play,
  ThumbsUp,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Pokemon {
  image_url: string | undefined;
  pokemon: ReactNode;
  id: number;
  name: string;
  type: string[];
  height: number;
  weight: number;
  abilities: string[];
  image: string;
}

export default function Pokemon() {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.online/api/pokemon/${slug}`
        );
        const result: Pokemon = await response.json();
        setPokemon(result);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    if (slug) {
      fetchPokemon();
    }
  }, [slug]);

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-lg font-medium text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="container max-w-screen-md mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 max-w-sm mx-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                {pokemon.pokemon}
              </h1>
              <div className="text-xs text-gray-500 mt-1">
                <span>4 min read</span>
                <span className="mx-1">Â·</span>
                <span>{pokemon.abilities}</span>
              </div>
            </div>
            <button className="btn btn-ghost btn-sm rounded-md text-green-600 hover:text-green-700 transition">
              Follow
            </button>
          </div>
          <div className="flex justify-center py-2">
            <img
              src={pokemon.image_url || "/default-image.jpg"}
              alt={String(pokemon.pokemon) || "Pokemon"}
              height={150}
              className="rounded-lg shadow-md transform transition duration-300 hover:scale-110"
            />
          </div>
          <div className="prose lg:prose-lg max-w-none text-gray-800 mt-2 leading-relaxed">
            <p>{pokemon.abilities}</p>
          </div>
        </div>
        <div className="bg-gray-100 border-t border-gray-200 px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-500">2.1K</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-500">82</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                <Play className="w-4 h-4" />
              </button>
              <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="btn btn-ghost btn-circle hover:bg-gray-200 transition">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
