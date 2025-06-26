
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyDetail from "./CompanyDetail";

const CompanyDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CompanyDetail />
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetailPage;
