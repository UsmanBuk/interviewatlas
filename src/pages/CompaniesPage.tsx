import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hiringData } from "@/data/hiringData";
import CompanyCard from "@/components/CompanyCard";

const CompaniesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Company Hiring Processes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore detailed hiring processes from top companies. Understand what to expect
              at each stage of your application journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringData.map((entry) => (
              <CompanyCard key={entry.id} entry={entry} />
            ))}
          </div>

          {hiringData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hiring processes available yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompaniesPage;
