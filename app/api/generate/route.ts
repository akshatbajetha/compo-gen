import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt: string = process.env.BASE_PROMPT!;

export async function POST(req: Request) {
  const prompt = await req.json();
  // console.log("This is from the form \n" + prompt);
  const promptToUse = prompt.prompt;
  // console.log("\nThis is the combined prompt \n" + promptToUse);
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
    const isTypescript = result.includes("React.FC");
    const language = isTypescript ? "typescript" : "javascript";
    const match =
      result.match(/const (\w+)\s*=/) || result.match(/const (\w+)\s*(=|:)/);
    const componentName = match ? match[1] : "Component";
    const fileName = `${componentName}.${isTypescript ? "tsx" : "jsx"}`;
    return Response.json({ result, fileName, language });
  } catch (error: any) {
    console.log("Error: " + error);
  }
}
