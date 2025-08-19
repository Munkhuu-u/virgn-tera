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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TravelCard } from "@/components/home/TravelCard";
import { Navigation } from "@/components/home/Navigation";
import { Hero } from "@/components/home/Hero";
import { travelData } from "../../app/tours/travelData";
import { WhyUs } from "@/components/home/WhyUs";
import { useState } from "react";
import CustomArrowLeft from "@/components/customIcons/arrowLeft";
import CustomArrowRight from "@/components/customIcons/arrowRight";

export function WhereToExplore() {
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <section className="py-6 bg-orange-50">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between mb-12 px-4">
          <div className="flex flex-row gap-2 text-6xl font-normal font-['Bebas_Neue']">
            <p className="text-black">Where to</p>
            <p className="text-red-400 ">explore</p>
          </div>

          <div className="flex space-x-2 ">
            <button
              className="opacity-70 hover:opacity-100"
              onClick={() => {
                const slider = document.querySelector(".slider");
                if (slider) {
                  const card = slider.children[0] as HTMLElement;
                  if (card) {
                    const scrollAmount = card.offsetWidth;
                    slider.scrollBy({
                      left: -scrollAmount,
                      behavior: "smooth",
                    });
                    const newIndex = Math.max(sliderIndex - 1, 0);
                    setSliderIndex(newIndex);
                  }
                }
              }}
            >
              <CustomArrowLeft />
            </button>
            <button
              className="opacity-70 hover:opacity-100"
              onClick={() => {
                const slider = document.querySelector(".slider");
                if (slider) {
                  const card = slider.children[0] as HTMLElement;
                  if (card) {
                    const scrollAmount = card.offsetWidth;
                    slider.scrollBy({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                    const newIndex = Math.min(
                      sliderIndex + 1,
                      travelData.length - 1
                    );
                    setSliderIndex(newIndex);
                  }
                }
              }}
            >
              <CustomArrowRight />
            </button>
          </div>
        </header>
        <section
          className="slider flex space-x-6 overflow-x-auto no-scrollbar pb-4 px-4 gap-5"
          onScroll={(e) => {
            const slider = e.currentTarget;
            const card = slider.children[0] as HTMLElement;
            if (card) {
              const scrollLeft = slider.scrollLeft;
              const cardWidth = card.offsetWidth;
              const newIndex = Math.round(scrollLeft / cardWidth);
              setSliderIndex(newIndex);
            }
          }}
        >
          {travelData.map((travel) => (
            <TravelCard key={travel.slug} {...travel} />
          ))}
        </section>
        {/* Slider dots */}
        <div className="flex justify-center space-x-2 mt-8 px-4">
          {Array.from({ length: travelData.length }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                sliderIndex === idx ? "bg-gray-400" : "bg-gray-300"
              }`}
              onClick={() => {
                const slider = document.querySelector(".slider");
                if (slider) {
                  const card = slider.children[0] as HTMLElement;
                  if (card) {
                    const scrollAmount = card.offsetWidth * idx;
                    slider.scrollTo({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }
                setSliderIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
