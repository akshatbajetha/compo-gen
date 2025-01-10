import LandingPage from "./LandingPage";
import Footer from "@/components/Footer";
import Navbar from "./Navbar";

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
export default page;
