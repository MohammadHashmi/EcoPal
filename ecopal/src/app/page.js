'use client'

import { useState } from "react";
import { AnimalCard } from "@/components/ui/animalcard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Leaf } from "lucide-react";
import Link from "next/link";

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
  const { toast } = useToast();
  const [adoptedAnimals, setAdoptedAnimals] = useState([]);

  const handleAdopt = (animalId) => {
    setAdoptedAnimals((prev) => [...prev, animalId]);
    toast({
      title: "Thank you for adopting!",
      description: "You've made a difference in an endangered animal's life.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" />
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 inline-flex items-center border-2 px-4 py-1 text-sm text-natural-800">
              <Leaf className="mr-1 h-4 w-4" />
              Make a Difference Today
            </Badge>
            <h1 className="animate-fade-in text-4xl font-bold text-natural-800 sm:text-5xl md:text-6xl">
              Adopt an Endangered Animal
            </h1>
            <p className="mt-6 animate-fade-in text-lg text-natural-800">
              Join our mission to protect endangered species. Your virtual adoption helps fund conservation efforts worldwide.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/all-animals">
                <Button 
                  className="border-4 border-natural-800 bg-accent-300 text-natural-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                  View All Animals
                </Button>
              </Link>
              <Button >
                <Globe className="mr-2 h-4 w-4" />
                Learn More
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
                  onAdopt={() => handleAdopt(animal.id)}
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