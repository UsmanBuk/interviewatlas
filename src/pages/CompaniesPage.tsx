
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./Home";

const CompaniesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default CompaniesPage;
