import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Heart } from "lucide-react";

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
          className="h-full w-full object-cover"
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
        <Button 
          className="w-full transition-all hover:-translate-y-1 bg-[#E0E7F1]"
          onClick={onAdopt}
        >
          <PawPrint className="mr-2 h-4 w-4" />
          Adopt {name}
        </Button>
      </CardFooter>
    </Card>
  );
};
