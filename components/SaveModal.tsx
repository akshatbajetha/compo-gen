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

export function SaveModal({
  codeToSave,
  prompt,
}: {
  codeToSave: string;
  prompt: string;
}) {
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
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center md:mb-4 mb-2">
                <Save className="mr-1 inline-block h-6 w-6" /> Do you want to
                save the current code to your account?
              </h4>
              <FormContainer className="md:m-10 m-4" action={saveCodeAction}>
                <Input
                  name="title"
                  required={true}
                  placeholder="Enter the title of the component"
                  className="m-2 md:placeholder:text-base placeholder:text-xs"
                />
                <Input
                  name="description"
                  required={true}
                  placeholder="Enter the description of the component"
                  className="m-2 md:placeholder:text-base placeholder:text-xs"
                />
                <input name="code" hidden={true} value={codeToSave} />
                <input name="prompt" hidden={true} value={prompt} />
                <Button
                  type="submit"
                  className="md:mt-10 mt-4 md:px-6 md:py-4 py-2  h-max w-max bg-foreground md:text-lg text-xs font-bold text-background hover:bg-background hover:text-foreground"
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
