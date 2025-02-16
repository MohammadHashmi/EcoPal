import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Heart } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { PetsList } from "@/app/tomogatchi/page";
import Link from "next/link";

const statusColors = {
  endangered: "bg-red-400 text-natural-800",
  critical: "bg-orange-400 text-natural-800",
  vulnerable: "bg-yellow-400 text-natural-800",
};

export const AnimalCard = ({ name, species, location, imageUrl, status, onAdopt }) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 -z-10" />
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0" />
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge className={`border-2 ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          <Button variant="noShadow" size="icon" className="h-8 w-8 hover:bg-pink-200">
            <Heart className="h-5 w-5 text-natural-600" />
          </Button>
        </div>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>
          {species}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-2">
        <p className="text-sm">
          <span className="font-bold">Location:</span> {location}
        </p>
      </CardContent>

      <CardFooter>
      <Drawer>
  <DrawerTrigger asChild>
  <Button 
          className="w-full transition-all hover:-translate-y-1 bg-[#E0E7F1]"
          onClick={onAdopt}
        >
          <PawPrint className="mr-2 h-4 w-4" />
          Adopt {name}
        </Button>
  </DrawerTrigger>
  <DrawerContent className="bg-main">
    <div className="mx-auto w-[300px]">
      <DrawerHeader>
        <DrawerTitle className="">Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>You can view new EcoPal in "My Pals"</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter className="grid grid-cols-2">
        <DrawerClose>
          <Button className="bg-[#E0E7F1] text-text dark:bg-darkBg dark:text-darkText">Adopt</Button>
        </DrawerClose>
        <DrawerClose asChild>
          <Button
            className="bg-[#E0E7F1] text-text dark:bg-darkBg dark:text-darkText"
          >
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>
      </CardFooter>
    </Card>
  );
};
