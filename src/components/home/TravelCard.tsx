import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Guest from "../customIcons/guest";
import Dollar from "../customIcons/dollar";
import PlusIcon from "../customIcons/plusIcon";

type TravelCardProps = {
  slug: string;
  title: string;
  image: string;
  price: string;
  guests: string;
  singleSupplement: string;
  category: string;
  link: string;
  description: string;
  duration: string;
  location: string;
  includes: string[];
};

export function TravelCard({
  slug,
  title,
  image,
  price,
  guests,
  singleSupplement,
  category,
  link,
  description,
  duration,
  location,
  includes,
}: TravelCardProps) {
  return (
    <Link href={link} className="flex-shrink-0 w-2/3">
      <Card className="relative h-[661px] overflow-hidden group cursor-pointer flex flex-col justify-center">
        <Image
          src={image}
          // alt={title}
          alt="../../src/app/tours/desert-dreams.ts"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        <div className="static inset-0 flex flex-col justify-center pl-16 z-10 gap-4">
          <div className="self-stretch justify-start text-white text-3xl font-normal font-['Bebas_Neue'] tracking-wider">
            {category}
          </div>

          <div className="self-stretch h-16 justify-start text-7xl font-normal font-['Bebas_Neue'] tracking-[3.60px]">
            <span className="text-white ">{title.split("-")[0]}</span>
            <span className="text-white ">-</span>
            <span className="text-red-400"> {title.split("-")[1]}</span>
          </div>

          <div className="grid grid-cols-2 max-w-fit place-items-left text-white text-xl font-normal font-['Bebas_Neue'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.30)] gap-x-20">
            <div className="flex justify-start items-start">
              <Guest />
              <span>5-8 GUESTS</span>
            </div>
            <div className="flex justify-start items-start">
              <Dollar />
              <span>3095</span>
            </div>
            <div className="flex justify-start items-start">
              <Guest />
              <span>9-11 GUESTS</span>
            </div>
            <div className="flex justify-start items-start">
              <Dollar />
              <span>2995</span>
            </div>
            <div className="flex justify-start items-start">
              <PlusIcon />
              <span>SINGLE SUPPLIMENT</span>
            </div>
            <div className="flex justify-start items-start">
              <Dollar />
              <span>500</span>
            </div>
          </div>
          <Button className="w-[128px] md:w-[64px] text-2xl font-normal font-['Bebas_Neue'] rounded-sm h-12 min-w-[128px] duration-200 text-[var(--foreground)] hover:text-[var(--popover-foreground)] bg-[var(--background)] hover:bg-[var(--popover)]">
            BOOK NOW
          </Button>
        </div>
      </Card>
    </Link>
  );
}
