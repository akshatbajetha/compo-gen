import { generateCode } from "@/lib/actions";

export async function POST(req: Request) {
  return generateCode(req);
}
