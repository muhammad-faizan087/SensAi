"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const saveResume = async (content) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const resume = await db.resume.upsert({
      where: { userId: user.id },
      update: { content },
      create: {
        userId: user.id,
        content,
      },
    });

    revalidatePath("/resume");
    return resume;
  } catch (error) {
    console.error("Error saving resume:", error);
    throw new Error("Failed to save resume");
  }
};

export const getResume = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const content = await db.resume.findUnique({
    where: { userId: user.id },
  });

  return content;
};

export const improveWithAi = async ({
  current,
  type,
  organization = "",
  title = "",
}) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const low = (type || "").toLowerCase().trim();
  const kind =
    low.startsWith("edu") || low === "education"
      ? "education"
      : low.startsWith("proj") || low === "project"
      ? "project"
      : low.startsWith("exp") || low === "experience"
      ? "experience"
      : low || "generic";

  // Only attach industry when appropriate (experience/projects), NOT for education
  const industryClause =
    (kind === "experience" || kind === "project") && user.industry
      ? ` for a ${user.industry} professional`
      : "";

  // Type-specific prompt skeletons
  let prompt;
  if (kind === "education") {
    prompt = `
You are an expert resume writer. Rewrite the following EDUCATION entry into a concise, achievement-focused resume bullet suitable for a CV or LinkedIn.
- Use the provided Title and Organization.
- Emphasize projects, coursework, outcomes, technical skills demonstrated, and any measurable results if present.
- DO NOT invent any facts, metrics, or industry-specific responsibilities.
- Keep it to one sentence or a single short paragraph (max 2 sentences).
- Output ONLY the rewritten bullet (no headers or extra commentary).

Title: "${title || "N/A"}"
Organization: "${organization || "N/A"}"
Original text: "${current}"
`;
  } else if (kind === "project") {
    prompt = `
You are an expert resume writer. Rewrite the following PROJECT entry into a concise resume bullet that highlights the technical stack, your contribution, and results/outcomes if any.
- Include title and organization if provided.
- Use action verbs and list technologies mentioned in the original text only.
- Do NOT invent company-level impact metrics or domain specifics.
- Output ONLY the rewritten bullet (1-2 sentences).

Title: "${title || "N/A"}"
Organization: "${organization || "N/A"}"
Original text: "${current}"
`;
  } else {
    // experience / generic
    prompt = `
You are an expert resume writer. Rewrite the following EXPERIENCE entry${industryClause} into a concise achievement-oriented resume bullet.
- Use the provided Title and Organization.
- Include measurable results if present (do NOT fabricate numbers).
- Mention technical skills or tools found in the original text.
- Keep it concise (1-2 sentences). Output ONLY the rewritten bullet.
Original text: "${current}"
Title: "${title || "N/A"}"
Organization: "${organization || "N/A"}"
`;
  }

  // (Optional) log prompt for debugging — remove in production
  console.log("Resume prompt:", prompt);

  try {
    const result = await model.generateContent(prompt); // keep same call you used
    const improved = result.response.text().trim();
    console.log("AI improved:", improved);
    return improved;
  } catch (error) {
    console.error("Error improving content:", error);
    throw new Error("Failed to improve content");
  }
};
