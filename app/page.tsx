import LandingPage from "../components/LandingPage";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

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
