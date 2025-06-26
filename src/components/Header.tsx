
import { Building } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center gap-3">
          <Building className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Hiring Path Generator</h1>
            <p className="text-sm opacity-90">Explore company hiring processes</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
