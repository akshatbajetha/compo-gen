import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt = `
You are a highly skilled front-end developer and UI/UX designer specializing in React, Next.js, ShadCN and TailwindCSS. Your task is to generate a production-ready NextJS (with typescript) functional component using TailwindCSS based on the user's request.

Ensure the component:
- Give code with NextJS version 14.2.18
- Is fully responsive and accessible.
- Uses only valid TailwindCSS classes for styling.
- Aligns with modern web design principles.
- Works seamlessly on mobile and desktop devices.
- Is modular, reusable, and free of syntax errors.
- Has a clean minimalist look
- Don't use <a> inside Link in nextjs
- Make sure to add tailwind classes related to dark theme as well. And for the dark theme use black colour instead of any other dark colour

Output Requirements:
- Return only the code for the Nextjs component NOTHING ELSE.
- Use proper indentation and formatting.
- Include placeholder data where necessary.
- Use dummy text data or img srcs where appropriate.

Before returning the output:
- Validate the TailwindCSS classes.
- Verify the code for syntax errors.
- Ensure the component is functional and follows best practices.

Below is the prompt from the user:
`;

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
    const result = completion.choices[0].message.content;
    return Response.json({ result });
  } catch (error: any) {
    console.log("Error: " + error);
  }
}
