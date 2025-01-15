import { SignInButton, useAuth } from "@clerk/nextjs";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { fetchSavedCodes } from "@/lib/actions";
import { Button } from "./ui/button";

async function ShowSavedCodesModal() {
  const userId = useAuth();
  // const savedCodes = await fetchSavedCodes();
  return <div></div>;
}
export default ShowSavedCodesModal;
