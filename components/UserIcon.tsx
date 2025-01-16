import { currentUser } from "@clerk/nextjs/server";
import { User } from "lucide-react";
import Image from "next/image";
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      // <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
      <Image
        src={profileImage}
        alt="user"
        className="rounded-full object-cover"
        width={32}
        height={32}
      />
    );
  return <User className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
