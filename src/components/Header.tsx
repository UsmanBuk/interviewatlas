
import { Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Building className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Hiring Path Generator</h1>
              <p className="text-sm opacity-90">Explore company hiring processes</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Home
              </Button>
            </Link>
            <Link to="/companies">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Companies
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
