import Image from "next/image";
import { Separator } from "./ui/separator";
import BuyMeACoffee from "@/public/images/bmc.png";

function Footer() {
  return (
    <>
      <Separator />
      <div className="flex flex-col items-center justify-center p-4 bottom-0 w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center px-5">
            Built by&nbsp;
            <span>
              <a
                href="https://github.com/akshatbajetha"
                className="underline"
                target="_blank"
              >
                Akshat Bajetha
              </a>
            </span>
          </div>
          <div className="flex items-center px-5">
            <a href="https://buymeacoffee.com/akshatbajetha" target="_blank">
              <Image
                src={BuyMeACoffee}
                alt="buymeacoffee"
                className="w-32 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
