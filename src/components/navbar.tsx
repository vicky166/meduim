"use client";
import Link from "next/link";
import { Search, Bell, Edit } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section>
        <nav className="border-b border-gray-200 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-[57px] justify-between items-center">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-black">
                  <h1 className="font-serif font-bold text-4xl">Muzan</h1>
                </Link>
                <div className="hidden md:flex items-center relative">
                  <Search className="absolute left-2 h-6 w-6 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-1 text-sm bg-gray-50 rounded-full border-0 focus:bg-white focus:ring-1 focus:ring-gray-200 w-[240px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Search className="h-5 w-5 text-gray-700" />
                </button>

                <Link
                  href="/new-story"
                  className="hidden md:flex items-center gap-1 text-gray-700 hover:text-gray-900"
                >
                  <Edit className="h-5 w-5" />
                  <span className="text-sm">Write</span>
                </Link>

                <button className="relative">
                  <Bell className="h-5 w-5 text-gray-700" />
                </button>

                <button className="flex items-center">
                  <Image
                    src="/img/muzan.webp"
                    alt="Profile picture"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                </button>

                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white absolute top-[57px] w-full border-b border-gray-200">
              <div className="flex flex-col items-start px-4 py-3">
                <Link
                  href="/new-story"
                  className="text-gray-700 hover:text-gray-900 py-2 w-full text-left"
                >
                  Write
                </Link>
                <button className="flex items-center gap-2 py-2 text-gray-700 w-full text-left">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </button>
                <div className="py-2 w-full text-left">
                  <Image
                    src="/img/muzan.webp"
                    alt="Profile picture"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <span className="ml-3">Profile</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </section>
    </>
  );
}
