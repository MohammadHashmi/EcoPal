"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimalCard } from "./animalcard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

//import { newTomogatchi } from "@/app/page";

export default function Tamagotchi() {

  const tomogatchis = [
    {
      id: 1,
      name: "Tiger",
      owner: "I l0ve animals",
      status: "change soon",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
  ];


  return (
    <>
    <div className="container px-4 py-8">
      {/* Your Pets Section */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-4">Your Pets</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tomogatchi) => (
            <div key={tomogatchi.id} className="animate-fade-in">
              <Link href={"tomogatchi-fox"}>
                <AnimalCard {...tomogatchi} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Other Pets Section */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Other Pets</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tomogatchis.map((tomogatchi) => (
            <div key={tomogatchi.id} className="animate-fade-in">
              <Link href={"tomogatchi-panda"}>
                <AnimalCard {...tomogatchi} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
