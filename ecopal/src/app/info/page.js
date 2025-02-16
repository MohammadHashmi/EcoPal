"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Leaf } from "lucide-react";
import Marquee from "@/components/ui/marquee";

const items = ['Conservation Efforts', 'Education & Awareness', 'Community Involvement']

const missionPoints = [
  {
    id: 1,
    title: "🌱 Conservation Efforts",
    description:
      "Our app promotes animal conservation by allowing users to virtually adopt endangered species, fostering a deeper connection with wildlife. Gamification rewards eco-friendly actions, encouraging sustainable habits that contribute to real-world impact.",
  },
  {
    id: 2,
    title: "📚 Fund Wildlife",
    description:
      "100% of proceeds from virtual adoptions supports wildlife organizations dedicated to habitat preservation and species protection. By blending technology, education, and community-driven initiatives, our platform empowers individuals to take meaningful steps toward safeguarding endangered animals and their ecosystems.",
  },
  {
    id: 3,
    title: "🤝 Community Involvement",
    description:
      "Collaborating with local communities, researchers, and conservationists to drive meaningful change for endangered species. We are passionate about saving animals, and are eager to help in anyway we can. Please contact us for research opportunities.",
  },
];

export default function TeamMissionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <Link href="/">
        <Button className="absolute top-0 left-0 m-16">
          <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4 scale-x-[-1]"></img>
        </Button>
      </Link>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 inline-flex items-center border-2 px-4 py-1 text-sm text-natural-800">
              <Leaf className="mr-1 h-4 w-4" />
              Our Mission
            </Badge>
            <h1 className="animate-fade-in text-4xl font-bold text-natural-800 sm:text-5xl md:text-6xl">
              Protecting Wildlife & Nature
            </h1>
            <p className="mt-6 animate-fade-in text-lg text-natural-800 pb-4">
              Join our mission to safeguard endangered species and preserve the beauty of nature through conservation, education, and community action.
            </p>
            <img src="https://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-25.gif" className="rounded-xl opacity-50 border-opacity-100https://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-25.gif border-black opacity"></img>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button>Get Involved</Button>

              {/* ✅ Matching "Learn More" button */}
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

      {/* Mission Highlights Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-natural-800">
            How We Make a Difference (CHANGE THIS STUFF)
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((point) => (
              <div key={point.id} className="text-text bg-main border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark bg-white mb-14">
                <h2 className="px-4 pt-4 text-2xl font-semibold text-[#A3E636]">{point.title}</h2>
                <p className="px-4 pb-4 text-gray-600 mt-2">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee items={items}></Marquee>
    </div>
  );
}
