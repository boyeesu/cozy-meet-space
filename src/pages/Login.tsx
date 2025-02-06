import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a dummy authentication - will be replaced with real auth later
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      toast({
        title: "Login successful",
        description: "Welcome to Innovation Hub!",
      });
      navigate("/home");
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Onboarding Information */}
        <div className="hidden md:block space-y-6 p-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Innovation Hub
          </h1>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                🚀 Your Creative Space Awaits
              </h3>
              <p className="text-gray-600">
                Access premium workspaces designed for innovation and collaboration.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                ⚡ Instant Booking
              </h3>
              <p className="text-gray-600">
                Book meeting rooms and desks with just a few clicks.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                🤝 Community Access
              </h3>
              <p className="text-gray-600">
                Join a community of innovators and entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <Card className="w-full">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                  Access your Innovation Hub account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleLogin}>
                  Login
                </Button>
                <p className="text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="mailto:admin@innovationhub.com" className="text-blue-600 hover:underline">
                    Contact admin
                  </a>
                </p>
              </CardFooter>
            </TabsContent>
            <TabsContent value="about">
              <CardHeader>
                <CardTitle>About Innovation Hub</CardTitle>
                <CardDescription>
                  Your premium coworking space solution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Our Facilities</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Modern meeting rooms with presentation equipment</li>
                    <li>Individual focus desks for concentrated work</li>
                    <li>High-speed internet connectivity</li>
                    <li>Complimentary beverages and snacks</li>
                    <li>24/7 access for members</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-gray-600">
                    123 Innovation Street, Tech District<br />
                    Lagos, Nigeria
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-sm text-gray-600">
                    Email: admin@innovationhub.com<br />
                    Phone: +234 123 456 7890
                  </p>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Login;