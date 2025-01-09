import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt: string = process.env.BASE_PROMPT!;

export async function POST(req: Request) {
  const prompt = await req.json();
  const promptToUse = prompt.prompt;
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

    const fileName = "CustomComponent.tsx";
    const componentName = "CustomComponent";
    return Response.json({ result, fileName, language, componentName });
  } catch (error: any) {
    console.log("Error: " + error);
  }
}
