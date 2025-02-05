import Image from "next/image";
import { Separator } from "./ui/separator";
import BuyMeACoffee from "@/public/images/bmc.png";

function Footer() {
  return (
    <div className="h-max">
      <Separator />
      <div className="flex flex-col items-center justify-center md:px-24 px-5 py-3 bottom-0 w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center px-5">
            <p className="md:text-base text-xs">Built by&nbsp;</p>
            <span>
              <a
                href="https://github.com/akshatbajetha"
                className="underline md:text-base text-xs"
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
                className="md:w-24 w-20"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
