
import { ArrowRight, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WelcomeHome = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Hiring Path Generator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Navigate your job application journey with confidence. Our platform provides detailed insights 
          into hiring processes from top companies, helping you prepare effectively for each stage of your interview process.
        </p>
        <Link to="/companies">
          <Button size="lg" className="text-lg px-8 py-6">
            Explore Company Processes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardHeader>
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Real Company Processes</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Get insider knowledge of actual hiring processes from companies across different industries and sizes.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Step-by-Step Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Follow detailed breakdowns of each interview stage, from initial screening to final decision.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Time & Format Details</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Know exactly what to expect with timing, format, and technical requirements for each stage.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* How It Works Section */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Companies</h3>
            <p className="text-muted-foreground">
              Explore our curated list of companies and their available positions.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Study the Process</h3>
            <p className="text-muted-foreground">
              Review detailed information about each stage of the hiring process.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Prepare & Apply</h3>
            <p className="text-muted-foreground">
              Use the insights to prepare effectively and increase your chances of success.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join thousands of candidates who have successfully navigated their hiring processes with our guidance.
        </p>
        <Link to="/companies">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            View All Companies
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeHome;
