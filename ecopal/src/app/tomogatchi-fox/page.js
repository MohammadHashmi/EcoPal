"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function TamagotchiPanda() {
    const [hunger, setHunger] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [energy, setEnergy] = useState(100);

    // Decrease stats over time
    useEffect(() => {
        const interval = setInterval(() => {
            setHunger(prev => Math.max(prev - 5, 0));
            setHappiness(prev => Math.max(prev - 2, 0));
            setEnergy(prev => Math.max(prev - 3, 0));
        }, 3000); // Every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Choose pet image based on stats
    let petImage = "/gifs/tamagotchi-neutral.gif"; // Default GIF
    if (hunger > 70 && happiness > 70 && energy > 70) {
        petImage = "/gifs/tamagotchi-happy.gif"; // Happy Pet GIF
    } else if (hunger < 30 || happiness < 30 || energy < 30) {
        petImage = "/gifs/tamagotchi-sad.gif"; // Sad Pet GIF
    }

    return(
<div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center border-4 border-gray-600">
<Link href="/">
        <Button className="absolute top-0 left-0 m-16">
          <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4"></img>
        </Button>
      </Link>
        <h1 className="text-3xl font-bold pixel-font">🐾 My 8-bit Pet</h1>
        <p className="mt-2">Take care of your Tamagotchi!</p>

        {/* 8-bit Pet Display */}
        <div className="mt-4 flex justify-center items-center">
            <img src={petImage} alt="GIF"></img>
        </div>

        {/* Display Pet Stats */}
        <div className="mt-4 space-y-2">
            <p>🍕 Hunger: <span className="text-yellow-400">{hunger}</span></p>
            <p>🎉 Happiness: <span className="text-green-400">{happiness}</span></p>
            <p>💤 Energy: <span className="text-blue-400">{energy}</span></p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-4 justify-center">
            <button onClick={() => setHunger(prev => Math.min(prev + 20, 100))} className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
                🍽️ Feed
            </button>
            <button onClick={() => setHappiness(prev => Math.min(prev + 15, 100))} className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
                🎾 Play
            </button>
            <button onClick={() => setEnergy(prev => Math.min(prev + 25, 100))} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                💤 Sleep
            </button>
        </div>
    </div>
    );
}
    