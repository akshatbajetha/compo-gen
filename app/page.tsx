import LandingPage from "../components/LandingPage";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="flex flex-col h-screen">
      <LandingPage />
      <Footer />
    </div>
  );
}
export default page;
