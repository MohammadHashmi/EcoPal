import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Heart } from "lucide-react";

const statusColors = {
  endangered: "bg-accent-200 text-natural-800",
  critical: "bg-accent-300 text-natural-800",
  vulnerable: "bg-accent-100 text-natural-800",
};

export const AnimalCard = ({ name, species, location, imageUrl, status, onAdopt }) => {
  return (
    <Card className="group relative overflow-hidden border-4 border-natural-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-natural-100 to-natural-200 opacity-50" />
      
      <div className="relative h-48 overflow-hidden border-b-4 border-natural-800">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-natural-200/50 to-transparent" />
      </div>

      <CardHeader className="space-y-2 bg-natural-100">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={`border-2 ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-natural-200">
            <Heart className="h-5 w-5 text-natural-600" />
          </Button>
        </div>
        <CardTitle className="text-xl font-bold text-natural-800">{name}</CardTitle>
        <CardDescription className="text-natural-800">
          {species}
        </CardDescription>
      </CardHeader>

      <CardContent className="bg-natural-100 pt-2">
        <p className="text-sm text-natural-800">
          <span className="font-bold">Location:</span> {location}
        </p>
      </CardContent>

      <CardFooter className="bg-natural-100">
        <Button 
          className="w-full border-4 border-natural-800 bg-accent-300 text-natural-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
          onClick={onAdopt}
        >
          <PawPrint className="mr-2 h-4 w-4" />
          Adopt {name}
        </Button>
      </CardFooter>
    </Card>
  );
};
