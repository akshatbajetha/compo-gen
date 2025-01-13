"use client";
import { SaveAll } from "lucide-react";
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
function ShowSavedCodesModal() {
  return (
    <div className="flex items-center justify-center" title="Save Code">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <SaveAll className="w-6 h-6" />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className=" overflow-y-auto">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-4">
              Saved Codes
            </h4>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ShowSavedCodesModal;
