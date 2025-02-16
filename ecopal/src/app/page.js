"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimalCard } from "@/components/ui/animalcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Leaf } from "lucide-react";
import { supabase } from "../../lib/supabase";

const animals = [
  {
    id: 1,
    name: "Luna",
    species: "Snow Leopard",
    location: "Central Asia",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    status: "endangered"
  },
  {
    id: 2,
    name: "Atlas",
    species: "Mountain Gorilla",
    location: "Central Africa",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    status: "critical"
  },
  {
    id: 3,
    name: "Nova",
    species: "Sumatran Tiger",
    location: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    status: "vulnerable"
  }
];

const Index = () => {
  const user = supabase.auth.getUser();
  console.log(user)
  if(!user){
    alert("You must be signed in to adopt an animal!")
  }

  /*async function addTomogatchis(animal){
    const { data, error } = await supabase.from("Tomogatchi's").insert([
        { user_owner: user, animal_species: animal }
      ]);

    console.log(data, error)

  }*/

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-16 inline-flex items-center border-2 px-4 py-1 text-sm text-natural-800">
              <Leaf className="mr-1 h-4 w-4" />
              Make a Difference Today
            </Badge>
            <h1 className="animate-fade-in text-4xl font-bold text-natural-800 sm:text-5xl md:text-6xl">
              Adopt an Endangered Animal
            </h1>
            <div className="justify-center flex">
              <img src="/gifs/pixelpups.gif" alt="GIF"></img>
            </div>
            <p className="mt-6 animate-fade-in text-lg text-natural-800">
              Join our mission to protect endangered species. Your virtual adoption helps fund conservation efforts worldwide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"all-animals"}>
                <Button>View All Animals</Button>
              </Link>
              <Link href="/info">
                <Button>
                  <Globe className="mr-2 h-4 w-4" />
                  <span>Learn More</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-natural-800">
            Featured Animals
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {animals.map((animal) => (
              <div key={animal.id} className="animate-fade-in">
                <AnimalCard
                  {...animal}
                  onAdopt={() => addTomogatchis("tiger")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
