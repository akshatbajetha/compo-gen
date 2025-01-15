import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchSavedCodes } from "@/lib/actions";
import { useCodeStore } from "@/store/codeStore";
import { auth } from "@clerk/nextjs/server";
import { DeleteIcon, View } from "lucide-react";
import { redirect } from "next/navigation";

async function SavedCodesPage() {
  const { userId } = await auth();
  const savedCodes = await fetchSavedCodes();
  if (savedCodes.length === 0)
    return <h1 className="text-2xl">You have no saved codes yet.</h1>;
  return (
    <div className="flex items-center justify-center h-screen">
      {userId ? (
        <div>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
            Your Saved Codes
          </h4>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Title</TableHead>
                  <TableHead className="text-center">Description</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savedCodes.map((savedCode) => {
                  const { id, title, description } = savedCode;
                  return (
                    <TableRow key={id}>
                      <TableCell>{title}</TableCell>
                      <TableCell>{description}</TableCell>
                      <TableCell className="flex items-center gap-x-2">
                        <Button>View</Button>
                        <Button>Delete</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        redirect("/")
      )}
    </div>
  );
}
export default SavedCodesPage;
