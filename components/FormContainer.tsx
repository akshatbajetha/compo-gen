"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

type StateType = {
  message: string;
};

const initialState = {
  message: "",
};

type actionFunction = (
  prevState: StateType,
  formData: FormData
) => Promise<{ message: string }>;

function FormContainer({
  action,
  children,
  className,
}: {
  action: actionFunction;
  children: React.ReactNode;
  className?: string;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return (
    <form
      className={`flex flex-col items-center justify-center ${className}`}
      action={formAction}
    >
      {children}
    </form>
  );
}
export default FormContainer;
