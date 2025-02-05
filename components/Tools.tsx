"use client";
import { Copy, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

function Tools({ currentCode }: { currentCode: string }) {
  return (
    <div className="flex flex-row items-center gap-x-4 w-max m-4">
      <a
        href={`data:text/javascript;charset=utf-8,${encodeURIComponent(
          currentCode
        )}`}
        download={`CustomComponent.jsx`}
        title="Download Code"
      >
        <Download className="w-6 h-6" />
      </a>
      {/* Copy Code button */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(currentCode);
          toast({
            title: "Code copied to clipboard",
          });
        }}
        title="Copy Code"
      >
        <Copy className="w-6 h-6" />
      </button>
    </div>
  );
}
export default Tools;
