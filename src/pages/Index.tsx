import { useState } from "react";
import { Space, SpaceType } from "@/types/booking";
import { spaces } from "@/data/spaces";
import { SpaceCard } from "@/components/SpaceCard";
import { PaystackConfig } from "@/components/PaystackConfig";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedType, setSelectedType] = useState<SpaceType | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const { toast } = useToast();

  const filteredSpaces = selectedType 
    ? spaces.filter((space) => space.type === selectedType) 
    : spaces;

  const handleSpaceSelect = (space: Space) => {
    setSelectedSpace(space);
    toast({
      title: "Space Selected",
      description: `You've selected ${space.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Innovation Hub Coworking Space</h1>
          <p className="text-xl">
            Access unlimited internet, coffee, innovation space, and community
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <PaystackConfig />
        </div>

        <div className="space-y-8">
          <div className="flex gap-4">
            <Button
              variant={selectedType === "meeting" ? "default" : "outline"}
              onClick={() => setSelectedType("meeting")}
            >
              Meeting Rooms
            </Button>
            <Button
              variant={selectedType === "desk" ? "default" : "outline"}
              onClick={() => setSelectedType("desk")}
            >
              Single Desks
            </Button>
            {selectedType && (
              <Button variant="ghost" onClick={() => setSelectedType(null)}>
                Show All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpaces.map((space) => (
              <SpaceCard 
                key={space.id} 
                space={space} 
                onSelect={handleSpaceSelect} 
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Innovation Hub Coworking Space. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;