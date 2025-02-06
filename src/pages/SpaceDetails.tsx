import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Space } from "@/types/booking";
import { KYCForm } from "@/components/KYCForm";

const SpaceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const space = location.state?.space as Space;
  const [showKYC, setShowKYC] = useState(false);

  if (!space) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Space not found</h1>
        <Button onClick={() => navigate("/")} className="mt-4">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          ← Back
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={space.imageUrl}
            alt={space.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{space.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <p className="text-gray-600 mb-4">{space.description}</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Capacity:</span> {space.capacity}{" "}
                    people
                  </p>
                  <p>
                    <span className="font-medium">Price:</span> ₦
                    {space.pricePerSlot}/6hrs
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Unlimited Internet</li>
                  <li>✓ Coffee</li>
                  <li>✓ Innovation Space</li>
                  <li>✓ Community Access</li>
                </ul>
              </div>
            </div>

            {!showKYC ? (
              <Button
                onClick={() => setShowKYC(true)}
                className="w-full mt-6"
                size="lg"
              >
                Continue to Booking
              </Button>
            ) : (
              <KYCForm space={space} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;