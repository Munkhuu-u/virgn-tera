import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative py-20">
      <Image
        src="/footer-background.png"
        alt="Desert landscape footer"
        fill
        className="object-cover"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
        }}
      />
      <div className="absolute inset-0 " />
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h2 className="text-center text-6xl md:text-8xl font-bold tracking-wider font-['Bebas_Neue'] mb-16">
          VIGN TERRA
        </h2>
        <form className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <div className="md:col-span-2 text-center">
            <Button className=" text-zinc-700 text-2xl font-normal font-['Bebas_Neue'] tracking-wide bg-neutral-100 rounded-sm hover:text-white h-12 min-w-[128px] transition-color duration-200">
              Submit{" "}
            </Button>
          </div>
        </form>
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          {[
            {
              title: "FIRST NATURE",
              items: ["About us", "Contact us", "Terms & Conditions"],
            },
            {
              title: "DESTINATIONS",
              items: [
                "Mongolia Tour Packages",
                "What to do in Mongolia",
                "Mongolia travel guide",
                "Mongolia travel tips",
                "Mongolia travel blog",
              ],
            },
            {
              title: "TRAVELS & INFO",
              items: [
                "Why Mongolia?",
                "What to do in Mongolia",
                "Mongolia travel guide",
                "Mongolia travel tips",
                "Mongolia travel blog",
                "Mongolia travel information",
                "Mongolia travel requirements",
                "Mongolia travel safety",
              ],
            },
            {
              title: "CONTACT EMAIL",
              items: [
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+976 99887766</span>
                </div>,
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@vironterra.com</span>
                </div>,
                <div className="flex space-x-4 mt-6">
                  <Facebook className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                </div>,
              ],
            },
          ].map(({ title, items }, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
