import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hiringData } from "@/data/hiringData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProcessStage from "@/components/ProcessStage";
import { ArrowLeft, Building, Clock } from "lucide-react";

const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const entry = hiringData.find((item) => item.id === id);

  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-6 py-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The hiring process you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalDuration = entry.process.reduce((total, stage) => {
    const duration = stage.expectedDuration.match(/(\d+)/)?.[1];
    return total + (duration ? parseInt(duration) : 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Companies
              </Link>
            </Button>
            
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <Building className="w-8 h-8" />
                  {entry.company}
                </h1>
                <h2 className="text-xl text-muted-foreground mb-4">{entry.role}</h2>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  {entry.process.length} stages
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ~{totalDuration} min total
                </Badge>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-3">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{entry.overview}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Hiring Process</h3>
            <div className="space-y-6">
              {entry.process.map((stage, index) => (
                <div key={index}>
                  <ProcessStage stage={stage} stageNumber={index + 1} />
                  {index < entry.process.length - 1 && (
                    <div className="flex justify-center my-4">
                      <Separator orientation="vertical" className="h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetailPage;
