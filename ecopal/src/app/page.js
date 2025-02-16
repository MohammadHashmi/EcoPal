"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimalCard } from "@/components/ui/animalcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Leaf } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";

const animals = [
  {
    id: 1,
    name: "Luna",
    species: "fox",
    location: "Central Asia",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    status: "endangered"
  },
  {
    id: 2,
    name: "Atlas",
    species: "monkey",
    location: "Central Africa",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    status: "critical"
  },
  {
    id: 3,
    name: "Nova",
    species: "panda",
    location: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    status: "vulnerable"
  }
];

const Index = () => {
  const router = useRouter();
  const [list, setList] = useState([])
  async function addTomogatchi(animal){
      const newList = list.concat({
        id: list.length + 1,
        name: animal,
        owner: "I l0ve animals",
        status: "change soon",
        imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      },)

      setList(newList)
      console.log(list)
  }

  function sendToTomogatchiPage() {
    const queryString = encodeURIComponent(JSON.stringify(list));
    router.push(`/tomogatchi?list=${queryString}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      <Link href="/">
        <Button className="absolute top-0 left-0 m-16">
          <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4"></img>
        </Button>
      </Link>
      <Link href="/signup">
        <Button className="absolute top-0 right-0 m-16">
          sign up
        </Button>
      </Link>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-16 inline-flex items-center border-2 px-4 py-1 text-sm text-natural-800">
              <Leaf className="mr-1 h-4 w-4" />
              Adopt Virtually, Protect Globally.
            </Badge>
            <h1 className="animate-fade-in text-4xl font-bold text-natural-800 sm:text-5xl md:text-6xl">
              Adopt an Endangered Animal
            </h1>
            <div className="justify-center flex">
              <img src="/gifs/pixelpups.gif" alt="GIF"></img>
            </div>
            <p className="mt-6 animate-fade-in text-lg text-natural-800">
              Join our mission to protect endangered species. sponsor endangered animals, care for them virtually, and be a part of the Conservation Revolution
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"/all-animals"}>
                <Button>View All Animals</Button>
              </Link>
              <Link href="/info">
                <Button>
                  <Globe className="mr-2 h-4 w-4" />
                  <span>Learn More</span>
                </Button>
              </Link>
                <Button onClick = {sendToTomogatchiPage}>
                  <PawPrint className="mr-2 h-4 w-4" />
                  <span>View Pals</span>
                </Button>
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
                  onAdopt={() => addTomogatchi(animal.species)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-natural-800">
          EcoPals: Adopt, Protect, and Make a Difference
          </h2>
          <p>Join the global movement to save endangered species with EcoAdopt, the first-ever virtual adoption platform that connects you directly to the animals you sponsor. Experience the thrill of interactive updates, including AI-generated messages from your adopted animal, live cam feeds, and personalized climate impact reports.
Through gamification, EcoAdopt rewards you for taking eco-friendly actions and contributing to a sustainable future. Each step you take brings us closer to protecting the world’s most vulnerable species.
Adopt an animal today, and be part of a change that echoes for generations.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
