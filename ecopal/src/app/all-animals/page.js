"use client";
import Image from "next/image";
import { supabase } from "../../../lib/supabase";
import { AnimalCard } from "@/components/ui/animalcard";

export default function AllAnimals() {

    const allAnimals = [
        {
          id: 1,
          name: "Snow Leopard",
          location: "Asia",
          imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          status: "endangered"
        },
        {
          id: 2,
          name: "Mountain Gorilla",
          location: "Africa",
          imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
          status: "critical"
        },
        {
          id: 3,
          name: "Sumatran Tiger",
          location: "Asia",
          imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
          status: "vulnerable"
        },

        {
            id: 4,
            name: "African Forest Elephant",
            location: "North America",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Critically Endangered"
          },

          {
            id: 5,
            name: "Black Rhino",
            location: "North America",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Critically Endangered"
          },

          {
            id: 6,
            name: "Vaquita",
            location: "North America",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Critically Endangered"
          },

          {
            id: 7,
            name: "Blue Whale",
            location: "Asia",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Endangered"
          },

          {
            id: 8,
            name: "Red Panda",
            location: "Asia",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Endangered"
          },

          {
            id: 9,
            name: "Cheetah",
            location: "Africa",
            imageUrl: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
            status: "Vulnerable"
          },
      ];

  return (
    <>
    <h1 className="text-6xl font-extrabold text-center mt-12 mb-8">All Animals</h1>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allAnimals.map((animal) => (
              <div key={animal.id} className="animate-fade-in">
                  <AnimalCard
                      {...animal}
                      onAdopt={() => handleAdopt(animal.id)} />
              </div>
          ))}
      </div>
      </>
    );
}
