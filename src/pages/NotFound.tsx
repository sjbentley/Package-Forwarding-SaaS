
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Package2, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-white">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8 flex justify-center">
            <Package2 className="h-24 w-24 text-deutscher-purple-light" />
          </div>
          
          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Oops! This package seems to be lost.
          </p>
          <p className="text-gray-400 mb-8">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          
          <Button className="bg-deutscher-purple hover:bg-deutscher-purple-light text-white px-8">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
