"use client";
import Image from "next/image";
import { supabase } from "../../../lib/supabase";
import { AnimalCard } from "@/components/ui/animalcard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AllAnimals() {

    const allAnimals = [
        {
          id: 1,
          name: "Snow Leopard",
          location: "Asia",
          imageUrl: "https://files.worldwildlife.org/wwfcmsprod/images/Snow_Leopard_hero_species_2021/hero_small/8hwbyi3z8p_species_snowleopard_hero.jpg",
          status: "endangered"
        },
        {
          id: 2,
          name: "Mountain Gorilla",
          location: "Africa",
          imageUrl: "https://static.toiimg.com/photo/105480362.cms",
          status: "critical"
        },
        {
          id: 3,
          name: "Sumatran Tiger",
          location: "Asia",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg",
          status: "vulnerable"
        },

        {
            id: 4,
            name: "African Elephant",
            location: "North America",
            imageUrl: "https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_16x9.jpg",
            status: "endangered"
          },

          {
            id: 5,
            name: "Black Rhino",
            location: "North America",
            imageUrl: "https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg/story_full_width/6wmmiztlbs_Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg",
            status: "critical"
          },

          {
            id: 6,
            name: "Vaquita",
            location: "North America",
            imageUrl: "https://wildfor.life/sites/default/files/species/hero/learn_photo.jpg",
            status: "endangered"
          },

          {
            id: 7,
            name: "Blue Whale",
            location: "Asia",
            imageUrl: "https://cdn.prod.website-files.com/665f17d0fb4bfc1e811460d3/665f17d0fb4bfc1e811468bf_5.jpg",
            status: "endangered"
          },

          {
            id: 8,
            name: "Red Panda",
            location: "Asia",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1200px-Red_Panda_%2824986761703%29.jpg",
            status: "endangered"
          },

          {
            id: 9,
            name: "Cheetah",
            location: "Africa",
            imageUrl: "https://panthera.org/sites/default/files/blog-post-images/BWA_ZAF_140429_0710_03460_F_0.jpg",
            status: "vulnerable"
          },
      ];

  return (
    <div className="py-16">
    <Link href="/">
      <Button className="absolute top-0 left-0 m-16">
        <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4 scale-x-[-1]"></img>
      </Button>
    </Link>
    <h1 className="text-6xl font-extrabold text-center mt-12 mb-8">All Animals</h1>
    <div className="flex items-center justify-center">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allAnimals.map((animal) => (
              <div key={animal.id} className="animate-fade-in">
                  <AnimalCard
                      {...animal}
                      onAdopt={() => handleAdopt(animal.id)} />
              </div>
          ))}
      </div>
    </div>
      </div>
    );
}
