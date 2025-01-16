import { Loader2 } from "lucide-react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Loader2 className="animate-spin" />
    </div>
  );
}
export default loading;
