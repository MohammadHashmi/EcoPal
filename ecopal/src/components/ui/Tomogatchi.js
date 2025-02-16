"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";

export default function Tamagotchi() {
    const [hunger, setHunger] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [energy, setEnergy] = useState(100);

    // Decrease stats over time
    useEffect(() => {
        const interval = setInterval(() => {
            setHunger(prev => Math.max(prev - 5, 0));
            setHappiness(prev => Math.max(prev - 2, 0));
            setEnergy(prev => Math.max(prev - 3, 0));
        }, 5000); // Every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Functions to interact with pet
    const feed = () => setHunger(prev => Math.min(prev + 20, 100));
    const play = () => setHappiness(prev => Math.min(prev + 15, 100));
    const sleep = () => setEnergy(prev => Math.min(prev + 25, 100));

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold">🐾 My Virtual Pet</h1>
            <p className="mt-2">Take care of your Tomogatchi!</p>

            {/* Display Pet Stats */}
            <div className="mt-4 space-y-2">
                <p>🍕 Hunger: <span className="text-yellow-400">{hunger}</span></p>
                <p>🎉 Happiness: <span className="text-green-400">{happiness}</span></p>
                <p>💤 Energy: <span className="text-blue-400">{energy}</span></p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-4 justify-center">
                <button onClick={feed} className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
                    🍽️ Feed
                </button>
                <button onClick={play} className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
                    🎾 Play
                </button>
                <button onClick={sleep} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                    💤 Sleep
                </button>
            </div>
        </div>
    );
}
