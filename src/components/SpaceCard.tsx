import { Space } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SpaceCardProps {
  space: Space;
  onSelect: (space: Space) => void;
}

export const SpaceCard = ({ space, onSelect }: SpaceCardProps) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    onSelect(space);
    navigate("/space-details", { state: { space } });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{space.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={space.imageUrl}
          alt={space.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="space-y-2">
          <p className="text-gray-600">{space.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              Capacity: {space.capacity}
            </span>
            <span className="text-sm font-medium">
              ₦{space.pricePerSlot}/6hrs
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleBookNow} className="w-full">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};