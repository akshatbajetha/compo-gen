import { generateCode } from "@/utils/actions";

export async function POST(req: Request) {
  return generateCode(req);
}
