"use client";

import { Plus, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const NavMenu = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeTab, setActiveTab] = useState("Following");

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowScrollButton(container.scrollWidth > container.clientWidth);
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const navItems = ["For you", "blog", "movies", "datascience", "technology"];

  return (
    <section className="w-full md:mt-[30px] md:ml-[200px]">
      <div className="container relative border-b bg-background md:ml-[176px] md:w-1/2">
        <div className="flex items-center px-2 md:px-4">
          <button
            className="flex h-10 w-10 flex-none items-center justify-center rounded-md hover:bg-muted"
            aria-label="Add new item"
          >
            <Plus className="h-5 w-5" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex flex-1 items-center space-x-4 overflow-x-auto scrollbar-none"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={cn(
                  "relative whitespace-nowrap px-3 py-2 text-xs md:text-sm transition-colors hover:text-foreground",
                  activeTab === item
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          {showScrollButton && (
            <button
              onClick={scrollRight}
              className="hidden md:flex h-10 w-10 flex-none items-center justify-center rounded-md hover:bg-muted"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};