import { logout } from "@/utils/actions";
import { Button } from "./ui/button";

function LogoutForm() {
  return (
    <form action={logout}>
      <Button
        type="submit"
        className="text-background bg-foreground hover:text-foreground hover:bg-background"
      >
        Logout
      </Button>
    </form>
  );
}
export default LogoutForm;
