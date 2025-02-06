import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Space } from "@/types/booking";

interface KYCData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { kycData, space } = location.state as {
    kycData: KYCData;
    space: Space;
  };
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!kycData || !space) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Booking information not found</h1>
        <Button onClick={() => navigate("/")} className="mt-4">
          Back to Home
        </Button>
      </div>
    );
  }

  const handleConfirmBooking = async () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date for your booking",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    // Here we'll later integrate Paystack and email notifications
    toast({
      title: "Booking Confirmed!",
      description: "You will receive an email with the booking details shortly.",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          ← Back
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Confirm Your Booking</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Space Details</h2>
              <p className="text-gray-600">{space.name}</p>
              <p className="text-gray-600">₦{space.pricePerSlot}/6hrs</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Your Information</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p>Name: {kycData.fullName}</p>
                <p>Email: {kycData.email}</p>
                <p>Phone: {kycData.phone}</p>
                <p>Organization: {kycData.organization}</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>

            {date && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Selected Date:</h3>
                <p>{format(date, "EEEE, MMMM do, yyyy")}</p>
              </div>
            )}

            <Button
              onClick={handleConfirmBooking}
              className="w-full"
              disabled={!date || isProcessing}
            >
              {isProcessing ? "Processing..." : "Confirm Booking"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;