"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { ArrowRightIcon, HelpCircle, Save, StarsIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { ButtonBorder } from "./ui/moving-border";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

export function SaveModal({ codeToSave }: { codeToSave: string }) {
  const { toast } = useToast();
  const [value, setValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    localStorage.setItem("Code - " + title, code);
    setValue("");
    setTimeout(() => {
      toast({
        title: "Saved the code to local storage",
        description: "You can find the code in the list of saved codes",
      });
    }, 1000);
  };
  return (
    <div className="flex items-center justify-center" title="Save Code">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <Save className="w-6 h-6" />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className=" overflow-y-auto">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
              <Save className="mr-1 inline-block h-6 w-6" /> Do you want to save
              the current code to local storage?
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center m-10"
            >
              <Input
                name="title"
                required={true}
                placeholder="Enter the title of the component"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <input name="code" hidden={true} value={codeToSave} />
              <Button
                type="submit"
                className="mt-10 px-6 py-4 h-max w-max bg-foreground text-lg font-bold text-background hover:bg-background hover:text-foreground"
              >
                Save
              </Button>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
