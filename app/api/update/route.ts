import { updateCode } from "@/lib/actions";

export async function POST(req: Request) {
  return updateCode(req);
}
