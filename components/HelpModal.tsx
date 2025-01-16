"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import {
  ArrowRightIcon,
  Download,
  HelpCircle,
  Save,
  StarsIcon,
} from "lucide-react";

export function HelpModal() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <HelpCircle className="w-6 h-6" />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className=" overflow-y-hidden">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center">
              <HelpCircle className="mr-1 inline-block h-6 w-6" /> How to use
              CompoGen
            </h4>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-4 items-start justify-start max-w-sm mx-auto">
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    Describe & Generate:
                  </span>{" "}
                  Enter the component details and click{" "}
                  <span className="font-bold">Generate</span> to create your
                  desired component.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    Edit & Preview:
                  </span>{" "}
                  View, edit, and preview the generated code instantly.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    Update or Regenerate:
                  </span>{" "}
                  Modify the existing code or generate new components as needed
                  (by clicking on the appropriate button).
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    Save Locally <Save className="inline-block h-4 w-4" />:
                  </span>{" "}
                  Save the code for easy access later.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    Download <Download className="inline-block h-4 w-4" />:
                  </span>{" "}
                  Download the code directly to your device if required.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-bold">
                    <ArrowRightIcon className="mr-1 inline-block h-4 w-4" />
                    View Saved Codes:
                  </span>{" "}
                  View all the codes / components you have saved
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-700 dark:text-neutral-300 font-bold text-xs">
                  You can save and view codes only when you're logged in.
                </span>
              </div>
            </div>
            <div className="flex  items-center justify-center right-0 bottom-0">
              <StarsIcon className="mr-1 inline-block h-4 w-4 " />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                More exciting features coming soon!
              </span>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
