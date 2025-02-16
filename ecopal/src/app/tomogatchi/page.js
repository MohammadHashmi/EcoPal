"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { TomogatchiCard } from "@/components/ui/tomogatch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

// Move the component using useSearchParams into a separate component
export function PetsList() {
  const searchParams = useSearchParams();
  const list = JSON.parse(decodeURIComponent(searchParams.get("list") || "[]"));

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((pet) => (
        <div key={pet.id} className="animate-fade-in">
          <Link href={`/tomogatchi-${pet.name}`}>
            <TomogatchiCard {...pet} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Tamagotchi() {
  const otherPets = [
    {
      id: 3,
      name: "Fox",
      owner: "Wild spirit",
      status: "Mischievous today!",
      imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5",
    },
    {
      id: 4,
      name: "Panda",
      owner: "Bamboo muncher",
      status: "Taking a nap!",
      imageUrl: "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85",
    },
  ];

  return (
    <div className="container px-4 py-8 mt-20">
            <Link href="/">
        <Button className="absolute top-0 left-0 m-16">
          <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4"></img>
        </Button>
      </Link>
      {/* Your Pets Section */}
      <section className="mb-12 p-6 bg-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-900">Your Pets</h1>
        {/* Wrap the PetsList component in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <PetsList />
        </Suspense>
      </section>

      {/* Other Pets Section */}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Other Pets</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherPets.map((pet) => (
            <div key={pet.id} className="animate-fade-in">
              <Link href={`/tamagotchi/${pet.id}`}>
                <TomogatchiCard {...pet} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
