import { Separator } from "./ui/separator";

function Footer() {
  return (
    <div className="h-max w-full">
      <Separator />
      <div className="flex flex-col items-center justify-center md:px-24 px-5 py-5 bottom-0">
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center px-5">
            <p className="md:text-base text-xs ">Built with ❤️ by&nbsp;</p>
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
        </div>
      </div>
    </div>
  );
}
export default Footer;
