import LoginForm from "@/components/LoginForm";
import Navbar from "../Navbar";

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
}
export default page;
