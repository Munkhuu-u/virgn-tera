import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Logo from "../../../public/Logo";
import { ModeToggle } from "@/components/home/ThemeButton";
import { translations, t, Lang } from "@/lib/i18n";
import { useState } from "react";

type NavigationProps = {
  blurType?: string;
};

export function Navigation({ blurType }: NavigationProps) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <header
      className={`fixed top-0 z-50 w-full ${blurType} flex flex-col justify-center items-center`}
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

          {/* <ModeToggle /> */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="bg-[var(--background)]"
          >
            {Object.keys(translations).map((l) => (
              <option key={l} value={l}>
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}
