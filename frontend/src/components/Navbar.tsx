import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellDot, UserCircle, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 flex items-center justify-between border-b border-black bg-white">
      {/* Search Input */}
      <div className="flex-1 flex items-center space-x-1">
        <Input
          type="text"
          placeholder="Search..."
          className="w-1/3 focus:ring-2 focus:ring-black"
        />
        <Button variant="default" className="bg-black text-white p-2">
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <Button variant="ghost" className="relative p-2 rounded-full">
          <BellDot className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </Button>

        {/* User Profile */}
        <Button variant="ghost" className="p-2 rounded-full">
          <UserCircle className="h-8 w-8 text-gray-600" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
