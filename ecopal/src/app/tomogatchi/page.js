"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimalCard } from "../../components/ui/animalcard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function Tamagotchi() {
  const searchParams = useSearchParams();
  const list = JSON.parse(decodeURIComponent(searchParams.get("list") || "[]"));

  const otherPets = [
    {
      id: 3,
      name: "Fox",
      owner: "Wild spirit",
      status: "Mischievous today!",
      imageUrl: "https://images.unsplash.com/photo-1503457574464-0ec7ee78e1fe",
    },
    {
      id: 4,
      name: "Panda",
      owner: "Bamboo muncher",
      status: "Taking a nap!",
      imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    },
  ];

  return (
    <div className="container px-4 py-8">
      {/* Your Pets Section */}
      <section className="mb-12 p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-900">Your Pets</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((pet) => (
            <div key={pet.id} className="animate-fade-in">
              <Suspense fallback={<div>Loading...</div>}>
                <Link href={`/tomogatchi-${pet.name}`}>
                  <AnimalCard {...pet} />
                </Link>
              </Suspense>
            </div>
          ))}
        </div>
      </section>

      {/* Other Pets Section */}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Other Pets</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherPets.map((pet) => (
            <div key={pet.id} className="animate-fade-in">
              <Suspense fallback={<div>Loading...</div>}>
              <Link href={`/tamagotchi/${pet.id}`}>
                <AnimalCard {...pet} />
              </Link>
              </Suspense>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
