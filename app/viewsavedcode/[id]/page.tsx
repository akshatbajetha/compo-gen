import { fetchCodeById } from "@/lib/actions";
import { Sandpack } from "@codesandbox/sandpack-react";
async function ViewSavedCode({ params }: { params: { id: string } }) {
  const codeObject = await fetchCodeById(params.id);
  const code = codeObject?.code || "";
  function formatCode(code: string) {
    const indentLevel = 0;

    return code
      .replace(/;/g, ";\n")
      .replace(/>{/g, ">\n{")
      .replace(/{/g, "{\n")
      .replace(/}/g, "\n}")
      .replace(/</g, "\n<")
      .replace(/\n\s*\n/g, "\n")
      .replace(/;/g, ";\n")
      .replace(/^(.*)$/gm, (line) => "\t".repeat(indentLevel) + line.trim())
      .replace(/\n\s*\n/g, "\n");
  }
  const formattedCode = formatCode(code);

  return (
    <div className="py-12 flex justify-center items-center flex-col">
      <div className="p-4 mt-16 max-w-screen-2xl">
        <Sandpack
          theme="dark"
          template="react"
          files={{
            ["CustomComponent.jsx"]: {
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

            editorHeight: 600,
            wrapContent: true,
            showLineNumbers: true,
          }}
        />
      </div>
    </div>
  );
}
export default ViewSavedCode;
