import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Save } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { saveCodeAction } from "@/lib/actions";
import FormContainer from "./FormContainer";
import { SignInButton, useAuth } from "@clerk/nextjs";

export function SaveModal({ codeToSave }: { codeToSave: string }) {
  const { userId } = useAuth();
  return (
    <div className="flex items-center justify-center" title="Save Code">
      {userId ? (
        <Modal>
          <ModalTrigger className="flex justify-center group/modal-btn">
            <Save className="w-6 h-6" />
          </ModalTrigger>
          <ModalBody>
            <ModalContent className=" overflow-y-auto">
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
                <Save className="mr-1 inline-block h-6 w-6" /> Do you want to
                save the current code to local storage?
              </h4>
              <FormContainer className="m-10" action={saveCodeAction}>
                <Input
                  name="title"
                  required={true}
                  placeholder="Enter the title of the component"
                  className="m-2"
                />
                <Input
                  name="description"
                  required={true}
                  placeholder="Enter the description of the component"
                  className="m-2"
                />
                <input name="code" hidden={true} value={codeToSave} />
                <Button
                  type="submit"
                  className="mt-10 px-6 py-4 h-max w-max bg-foreground text-lg font-bold text-background hover:bg-background hover:text-foreground"
                >
                  Save
                </Button>
              </FormContainer>
            </ModalContent>
          </ModalBody>
        </Modal>
      ) : (
        <SignInButton mode="modal">
          <Save className="w-6 h-6" />
        </SignInButton>
      )}
    </div>
  );
}
