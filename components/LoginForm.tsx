import Image from "next/image";
import { Button } from "./ui/button";
import GoogleIcon from "@/public/images/GoogleIcon.png";
import { googleLogin } from "@/utils/actions";

function LoginForm() {
  return (
    <form action={googleLogin}>
      <Button
        type="submit"
        name="action"
        value="google"
        className="text-background bg-foreground hover:text-foreground hover:bg-background"
      >
        <span>
          <Image src={GoogleIcon} width={20} alt="Google Icon" />
        </span>
        Sign in with Google
      </Button>
    </form>
  );
}
export default LoginForm;
