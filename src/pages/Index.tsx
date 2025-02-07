
import { useState } from "react";
import { Space, SpaceType } from "@/types/booking";
import { spaces } from "@/data/spaces";
import { SpaceCard } from "@/components/SpaceCard";
import { PaystackConfig } from "@/components/PaystackConfig";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Coffee, Wifi, Users, Building } from "lucide-react";

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
      {/* Hero Section */}
      <header className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Innovation Hub Coworking Space
            </h1>
            <p className="text-xl lg:text-2xl mb-8 animate-fade-in">
              Your Premium Workspace Solution in Lagos
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="animate-fade-in hover:scale-105 transition-transform"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Innovation Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art meeting rooms and workspaces</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Wifi className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-gray-600">Unlimited high-speed internet access</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Coffee className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complimentary Drinks</h3>
              <p className="text-gray-600">Free coffee and refreshments</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Access</h3>
              <p className="text-gray-600">Join a network of innovators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Space</h2>
          
          <div className="mb-8">
            <PaystackConfig />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedType === "meeting" ? "default" : "outline"}
                onClick={() => setSelectedType("meeting")}
                className="animate-fade-in"
              >
                Meeting Rooms
              </Button>
              <Button
                variant={selectedType === "desk" ? "default" : "outline"}
                onClick={() => setSelectedType("desk")}
                className="animate-fade-in"
              >
                Single Desks
              </Button>
              {selectedType && (
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedType(null)}
                  className="animate-fade-in"
                >
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
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <p className="text-xl mb-4">123 Innovation Street, Tech District</p>
            <p className="text-xl mb-4">Lagos, Nigeria</p>
            <p className="text-gray-600">
              Open 24/7 for Members
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: admin@innovationhub.com</p>
              <p>Phone: +234 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 8pm</p>
              <p>Weekend: 10am - 6pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <p>Connect with us on social media</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>© 2024 Innovation Hub Coworking Space. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
