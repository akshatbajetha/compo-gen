import FormContainer from "@/components/FormContainer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteCodeAction, fetchSavedCodes } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

async function SavedCodesPage() {
  const { userId } = await auth();
  const savedCodes = await fetchSavedCodes();

  if (savedCodes.length === 0)
    return (
      <h1 className="mt-24 flex justify-center text-2xl">
        You have no saved codes yet.
      </h1>
    );
  return (
    <div className="flex mt-24 justify-center h-screen">
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
                      <TableCell className="md:text-base text-sm md:text-left text-center">
                        {title}
                      </TableCell>
                      <TableCell className="md:text-base text-xs md:text-left text-center">
                        {description}
                      </TableCell>
                      <TableCell className="flex items-center gap-x-2">
                        <Link href={`/viewsavedcode/${id}`}>
                          <Button className="md:w-16 w-12">View</Button>
                        </Link>
                        <FormContainer action={deleteCodeAction}>
                          <input readOnly name="id" hidden={true} value={id} />
                          <Button className="md:w-16 w-12" type="submit">
                            Delete
                          </Button>
                        </FormContainer>
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
