import Navbar from "../Navbar";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

function page() {
  const fileName = "CustomComponent.tsx";
  const formattedCode = `import React from "react";

export default function CustomComponent() {
  return (
    <div>
      <h1 className="text-red-500 text-5xl">Why is this not red</h1>
    </div>
  );
}`;
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="border-2 border-red-500 h-full">
        <SandpackProvider
          template="react"
          theme="auto"
          files={{
            "/CustomComponent.tsx": {
              code: formattedCode,
              active: true,
            },
            "/App.js": {
              code: `import React from "react";\nimport CustomComponent from "./CustomComponent";\n\nexport default function App() {\n  return <CustomComponent />;\n
}`,
            },
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}
export default page;
