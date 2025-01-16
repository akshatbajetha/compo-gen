"use server";

import { currentUser } from "@clerk/nextjs/server";
import OpenAI from "openai";
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt: string = process.env.BASE_PROMPT!;
const updatePrompt: string = process.env.UPDATE_PROMPT!;

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

export async function generateCode(req: Request) {
  const formData = await req.json();
  const promptToUse = formData.prompt;
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
    if (
      result === undefined ||
      result === null ||
      result.includes("Please provide a valid prompt")
    ) {
      return Response.json({ message: "Please provide a valid prompt" });
    }

    const formattedCode = result.replace(
      /```typescript\n|```javascript\n|```tsx\n|```jsx\n|```\n|```$/g,
      ""
    );

    return Response.json({
      formattedCode,
    });
  } catch (error: any) {
    console.log("Error: " + error);
    return Response.json({ error });
  }
}

export async function updateCode(req: Request) {
  const formData = await req.json();
  const promptToUse = formData.prompt;
  const prevCode = formData.currentCode;
  let formattedCode: string = prevCode;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: updatePrompt + prevCode,
        },
        { role: "user", content: promptToUse },
      ],
      temperature: 0.8,
    });
    const result = completion.choices[0].message.content!;
    if (
      result === undefined ||
      result === null ||
      result === "Please provide a valid prompt" ||
      result.startsWith("Error:")
    ) {
      formattedCode = prevCode;
      return Response.json({
        message: "Please provide a valid prompt",
        formattedCode,
      });
    }

    formattedCode = result.replace(
      /```typescript\n|```javascript\n|```tsx\n|```jsx\n|```\n|```$/g,
      ""
    );

    return Response.json({
      formattedCode,
    });
  } catch (error: any) {
    console.log("Error: " + error);
    return Response.json({ error });
  }
}

export const saveCodeAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const code = formData.get("code") as string;

    await db.code.create({
      data: {
        title,
        description,
        code,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/savedcodes");
};

export const deleteCodeAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const id = formData.get("id") as string;

  try {
    await db.code.delete({
      where: {
        id,
      },
    });
    revalidatePath("/savedcodes");
    return { message: "Code deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const fetchSavedCodes = async () => {
  const user = await getAuthUser();
  const savedCodes = await db.code.findMany({
    where: {
      clerkId: user.id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      code: true,
    },
  });
  return savedCodes;
};

export const fetchCodeById = async (id: string) => {
  const code = await db.code.findUnique({
    where: {
      id,
    },
    select: {
      code: true,
    },
  });
  return code;
};
