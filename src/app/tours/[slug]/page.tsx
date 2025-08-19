// app/tours/[slug]/page.tsx

import { notFound } from "next/navigation";
import { travelData } from "../travelData";
import { Navigation } from "@/components/home/Navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export default async function TourPage({ params }: PageProps) {
  const { slug } = params;

  // Find the tour data based on slug
  const tour = travelData.find((tour) => tour.slug === slug);

  console.log("Tour data:", tour);

  if (!tour) {
    notFound();
  }

  return (
    <section>
      {/* Introduction section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Navigation */}
        <Navigation blurType="backdrop-blug-none" />

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-2xl">
              {/* Category */}
              <div className="mb-4">
                <span className="text-red-500 text-2xl md:text-3xl font-bebas tracking-wider uppercase">
                  {tour.title.split("-")[0]}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-8">
                <span className="text-white text-5xl md:text-7xl font-bebas tracking-wider uppercase block">
                  {tour.title.split("-")[0]}
                </span>
                <span className="text-white text-5xl md:text-7xl font-bebas tracking-wider uppercase">
                  -
                </span>
              </h1>

              {/* Pricing Grid */}
              <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-w-lg">
                {/* 5-8 Guests */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    {tour.guests}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-2xl">$</span>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    {tour.price}
                  </span>
                </div>

                {/* 9-11 Guests */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    {tour.guests}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-2xl">$</span>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    {tour.price}
                  </span>
                </div>

                {/* Single Supplement */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-lg">+</span>
                  </div>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    SINGLE SUPPLEMENT
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-2xl">$</span>
                  <span className="text-white text-lg md:text-xl font-bebas tracking-wide">
                    {tour.singleSupplement}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Short description */}
      <section>
        <div>
          <img src={tour.tourImage} alt="" />
        </div>
        <div>
          <p></p>
          <body></body>
        </div>
      </section>
    </section>
  );
}

export async function generateStaticParams() {
  return travelData.map((tour) => ({
    slug: tour.slug,
  }));
}
