import { useState } from "react"; // ✅ Add this at the top if not yet
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: `Phone: ${formData.phone}`,
    };

    try {
      const res = await fetch("http://localhost:4000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      alert(result.message || "Submitted!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Try again.");
    }
  };

  return (
    <footer className="relative h-[60lvh] py-20 w-lvw max-w-[1280px]  flex flex-col items-center justify-center">
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
      <div className="relative z-10 container mx-auto px-4 text-white flex flex-col items-center">
        <h2 className="text-center text-6xl md:text-8xl font-bold tracking-wider font-['Bebas_Neue'] mb-16">
          VIGN TERRA
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="placeholder-white px-4 py-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:ring-0"
          />
          <div className="md:col-span-2 text-center">
            <Button
              type="submit"
              className="text-zinc-700 text-2xl font-normal font-['Bebas_Neue'] tracking-wide bg-neutral-100 rounded-sm hover:text-white h-12 min-w-[128px] transition-color duration-200"
            >
              Submit
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
