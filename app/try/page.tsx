"use client";

import { useState } from "react";
import Link from "next/link";

const DEFAULT_COLORS = [
  "#f9a8d4", // rose-300
  "#fcd34d", // amber-300
  "#86efac", // green-300
  "#93c5fd", // blue-300
  "#c4b5fd", // violet-300
  "#fdba74", // orange-300
];

const DEFAULT_CAPTIONS = [
  "Morning light and coffee ☕",
  "Weekend vibes only ✨",
  "New chapter, same me 🌿",
  "Golden hour never misses 🌅",
  "Less noise, more signal 🎯",
  "Making it count 💫",
];

interface Post {
  color: string;
  caption: string;
}

export default function TryPage() {
  const [posts, setPosts] = useState<Post[]>(
    DEFAULT_COLORS.map((color, i) => ({ color, caption: DEFAULT_CAPTIONS[i] }))
  );
  const [hovered, setHovered] = useState<number | null>(null);

  function updateColor(index: number, color: string) {
    setPosts((prev) => prev.map((p, i) => (i === index ? { ...p, color } : p)));
  }

  function updateCaption(index: number, caption: string) {
    setPosts((prev) => prev.map((p, i) => (i === index ? { ...p, caption } : p)));
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
          Gridcraft
        </Link>
        <Link
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </Link>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-600">
            Grid preview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Design your IG grid. See it live.
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Pick a color swatch and write a caption for each post. Hover the grid to preview.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* INPUTS */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Your 6 posts
            </h2>
            {posts.map((post, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
              >
                <label
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                  title={`Pick color for post ${i + 1}`}
                >
                  <div
                    className="h-10 w-10 rounded-xl border border-neutral-200 shadow-sm ring-2 ring-transparent group-hover:ring-rose-300 transition"
                    style={{ backgroundColor: post.color }}
                  />
                  <input
                    type="color"
                    value={post.color}
                    onChange={(e) => updateColor(i, e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-[10px] font-medium text-neutral-400 group-hover:text-neutral-600">
                    Pick
                  </span>
                </label>
                <div className="flex-1 min-w-0">
                  <label className="mb-1 block text-xs font-medium text-neutral-400">
                    Post {i + 1}
                  </label>
                  <input
                    type="text"
                    value={post.caption}
                    maxLength={120}
                    onChange={(e) => updateCaption(i, e.target.value)}
                    placeholder={`Caption for post ${i + 1}…`}
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* GRID PREVIEW */}
          <div className="flex flex-col items-center">
            <h2 className="mb-4 self-start text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Grid preview
            </h2>
            <div className="w-full max-w-xs">
              {/* IG-style profile mock header */}
              <div className="mb-3 flex items-center gap-3 px-1">
                <div className="h-8 w-8 rounded-full bg-rose-100" />
                <div>
                  <p className="text-sm font-semibold leading-none">your_handle</p>
                  <p className="mt-0.5 text-xs text-neutral-400">Creator</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-0.5 overflow-hidden rounded-lg">
                {posts.map((post, i) => (
                  <div
                    key={i}
                    className="relative aspect-square cursor-default"
                    style={{ backgroundColor: post.color }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {hovered === i && post.caption && (
                      <div className="absolute inset-0 flex items-end bg-black/40 p-2">
                        <p className="line-clamp-3 text-[10px] leading-tight text-white">
                          {post.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-3 text-center text-xs text-neutral-400">
                Hover a cell to preview its caption
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-neutral-400">
          This is a v0 preview.{" "}
          <Link href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </Link>{" "}
          for drag-and-drop, real image upload, and scheduling.
        </p>
      </div>
    </div>
  );
}
