import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Logo from "../../../public/Logo";

export function Hero() {
  return (
    // className="flex-1 h-7 text-center justify-start  text-2xl font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-110 hover:cursor-pointer hover:text-[var(--popover-foreground)]"
    <section className="relative h-lvh w-lvw max-w-[1280px] flex flex-col justify-center">
      <Image
        src="/hero-landscape.png"
        alt="Dramatic landscape with stormy skies"
        fill
        className="object-cover object-center max-w-[1280px]"
        priority
      />
      <div className="z-10 text-left text-[var(--popover-foreground)] ml-5">
        <p className="text-2xl font-normal font-['Bebas_Neue']">
          EXCLUSIVE JOURNEYS TO
          <span className="text-[var(--popover-foreground)]"> MONGOLIA</span>
        </p>
        <div className="flex self-stretch justify-start gap-3 text-8xl font-normal font-['Bebas_Neue'] tracking-[4.80px]">
          <p className="text-[var(--foreground)]">WELGOME TO</p>
          <p className="text-[var(--popover-foreground)]">VIRGN TERRA</p>
        </div>
        <Button className="flex items-center justify-center text-2xl font-normal font-['Bebas_Neue'] tracking-wide rounded-sm h-12 min-w-[128px] transition-color cursor-pointer  duration-200 text-[var(--foreground)] hover:text-[var(--popover-foreground)] bg-[var(--background)] hover:bg-[var(--popover)]">
          BOOK NOW
        </Button>
      </div>
    </section>
  );
}
