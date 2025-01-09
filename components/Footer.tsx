import Image from "next/image";
import { Separator } from "./ui/separator";
import BuyMeACoffee from "@/public/images/bmc.png";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Separator />
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center px-5">
          Built by&nbsp;
          <span>
            <a
              href="https://github.com/akshatbajetha"
              className="hover:underline"
              target="_blank"
            >
              Akshat Bajetha
            </a>
          </span>
        </div>
        <div className="flex items-center px-5">
          <a href="https://buymeacoffee.com/akshatbajetha" target="_blank">
            <Image src={BuyMeACoffee} alt="buymeacoffee" className="w-28 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
