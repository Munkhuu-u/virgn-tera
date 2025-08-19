import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Logo from "../../../public/Logo";
import { ModeToggle } from "@/components/home/ThemeButton";

type NavigationProps = {
  blurType?: string;
};

export function Navigation({ blurType }: NavigationProps) {
  return (
    <header
      className={`fixed top-0 z-50 w-full ${blurType} flex flex-col justify-center items-center px-[150px]`}
    >
      <div className="w-full max-w-[1280px] flex justify-between">
        <div className="hover:scale-110 transition-transform duration-200">
          <Logo />
        </div>
        <nav className="md:flex items-center space-x-8">
          <div
            data-property-1="button"
            className="w-28 p-1.5 inline-flex justify-center items-center"
          >
            {/* <a className="flex-1 h-7 text-center justify-start text-white text-2xl font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-110 hover:cursor-pointer"> */}
            <a className="flex-1 h-7 text-center justify-start  text-2xl font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-110 hover:cursor-pointer hover:text-[var(--popover-foreground)]">
              HOME
            </a>
          </div>
          <div
            data-property-1="button"
            className="w-28 p-1.5 inline-flex justify-center items-center"
          >
            <a className="flex-1 h-7 text-center justify-start  text-2xl font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-110 hover:cursor-pointer hover:text-[var(--popover-foreground)]">
              ABOUT US
            </a>
          </div>
          <div
            data-property-1="button"
            className="w-28 p-1.5 inline-flex justify-center items-center"
          >
            <a className="flex-1 h-7 text-center justify-start  text-2xl font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-110 hover:cursor-pointer hover:text-[var(--popover-foreground)]">
              TOURS
            </a>
          </div>
          <Button className="flex items-center justify-center text-2xl font-normal font-['Bebas_Neue'] tracking-wide bg-neutral-100 rounded-sm text-zinc-700 h-12 min-w-[128px] transition-color hover:text-neutral-100 hover:bg-zinc-700 cursor-pointer  duration-200">
            BOOK NOW
          </Button>
          {/* <ModeToggle /> */}
        </nav>
      </div>
    </header>
  );
}
