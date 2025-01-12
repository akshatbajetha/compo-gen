"use server";

import { error, log } from "console";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt: string = process.env.BASE_PROMPT!;
const updatePrompt: string = process.env.UPDATE_PROMPT!;
let formattedCode = "";

export async function generateCode(req: Request) {
  const formData = await req.json();
  const promptToUse = formData.prompt;
  const action = formData.action;

  if (action === "update" && formattedCode !== "") {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: updatePrompt + formattedCode,
          },
          { role: "user", content: promptToUse },
        ],
        temperature: 0.8,
      });
      const result = completion.choices[0].message.content!;
      if (result.includes("Please provide a valid prompt")) {
        return Response.json({ result });
      }
      const isTypescript = result.includes("React.FC");
      const language = isTypescript ? "typescript" : "javascript";
      const extension = isTypescript ? ".tsx" : ".jsx";

      const fileName = `CustomComponent${extension}`;
      const componentName = "CustomComponent";
      formattedCode = result.replace(
        /```typescript\n|```javascript\n|```tsx\n|```jsx\n|```\n|```$/g,
        ""
      );

      return Response.json({
        formattedCode,
        fileName,
        language,
        componentName,
      });
    } catch (error: any) {
      console.log("Error: " + error);
      return Response.json({ error });
    }
  } else if (action === "generate") {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: basePrompt,
          },
          { role: "user", content: promptToUse },
        ],
        temperature: 0.8,
      });
      const result = completion.choices[0].message.content!;
      if (result.includes("Please provide a valid prompt")) {
        return Response.json({ result });
      }
      const isTypescript = result.includes("React.FC");
      const language = isTypescript ? "typescript" : "javascript";
      const extension = isTypescript ? ".tsx" : ".jsx";

      const fileName = `CustomComponent${extension}`;
      const componentName = "CustomComponent";
      formattedCode = result.replace(
        /```typescript\n|```javascript\n|```tsx\n|```jsx\n|```\n|```$/g,
        ""
      );

      return Response.json({
        formattedCode,
        fileName,
        language,
        componentName,
      });
    } catch (error: any) {
      console.log("Error: " + error);
      return Response.json({ error });
    }
  }
  return Response.json({ error: "Invalid action" });
}
