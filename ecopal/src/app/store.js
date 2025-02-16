import { create } from "zustand";

export const useTomogatchiStore = create((set) => ({
  tomogatchis: [],
  addTomogatchi: (animal) =>
    set((state) => ({
      tomogatchis: [
        {
          id: state.tomogatchis.length + 1,
          name: animal,
          owner: "I love animals",
          status: "change soon",
          imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        },
      ],
    })),
}));
