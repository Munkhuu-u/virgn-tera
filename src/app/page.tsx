"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Star,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TravelCard } from "@/components/home/TravelCard";
import { Navigation } from "@/components/home/Navigation";
import { Hero } from "@/components/home/Hero";
import { travelData } from "./tours/travelData";
import { WhyUs } from "@/components/home/WhyUs";
import { useEffect, useState } from "react";
import CustomArrowLeft from "@/components/customIcons/arrowLeft";
import CustomArrowRight from "@/components/customIcons/arrowRight";
import { WhereToExplore } from "@/components/home/WhereToExplore";
import { QuoteSection } from "@/components/home/QuoteSection";
import FooterSection from "@/components/home/FooterSection";
import { translations, t, Lang } from "@/languages/i18n";

export default function HomePage() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const [lang, setLang] = useState<Lang>(
    () =>
      (localStorage.getItem("lang") as Lang) ||
      "en" ||
      "sp" ||
      "mn" ||
      "cn" ||
      "en" ||
      "ru"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-[var(--foreground)] flex flex-col items-center">
      <p className="bg-[var(--background)]">{t(lang, "Hello")}</p>

      <Navigation blurType="backdrop-blur-md" />
      <Hero />
      {/* <WhyUs /> //20/Aug odor zasah ystoi
      <WhereToExplore />
      <QuoteSection />
      <FooterSection /> */}
    </div>
  );
}
