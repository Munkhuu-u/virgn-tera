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
import { useState } from "react";
import CustomArrowLeft from "@/components/customIcons/arrowLeft";
import CustomArrowRight from "@/components/customIcons/arrowRight";
import { WhereToExplore } from "@/components/home/WhereToExplore";
import { QuoteSection } from "@/components/home/QuoteSection";
// import { FooterSection } from "@/components/home/FooterSection";
import FooterSection from "@/components/home/FooterSection";

export default function HomePage() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div className="bg-background flex flex-col items-center">
      <Navigation blurType="backdrop-blur-md" />
      <Hero />
      {/* <WhyUs />
      <WhereToExplore />
      <QuoteSection />
      <FooterSection /> */}
    </div>
  );
}
