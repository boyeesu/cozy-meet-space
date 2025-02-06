import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export const PaystackConfig = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const savedKey = localStorage.getItem("PAYSTACK_PUBLIC_KEY");
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("PAYSTACK_PUBLIC_KEY", apiKey);
    toast({
      title: "API Key Saved",
      description: "Your Paystack public key has been saved successfully.",
    });
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">Paystack Configuration</h2>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Enter your Paystack public key below. You can find this in your{" "}
          <a
            href="https://dashboard.paystack.com/#/settings/developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Paystack Dashboard
          </a>
        </p>
        <Input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter Paystack Public Key"
          className="w-full"
        />
        <Button onClick={handleSave} className="w-full">
          Save API Key
        </Button>
      </div>
    </div>
  );
};