import { updateCode } from "@/utils/actions";

export async function POST(req: Request) {
  return updateCode(req);
}
