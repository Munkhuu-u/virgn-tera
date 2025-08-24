import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhyUs() {
  return (
    // <section className="py-[40px] px-11 bg-orange-50 overflow-hidden">
    <section className="w-lvw max-w-[1280px] flex flex-col justify-center h-[70lvh] overflow-hidden bg-[var(--foreground)] text-[var(--foreground)]">
      <div className="flex relative">
        {/* border layer */}
        <div className="absolute right-20 top-0 w-[1000px]">
          <Image
            src="/borderLine.svg"
            alt="Border layer"
            width={100}
            height={100}
            className="object-contain w-full h-full"
            style={{ display: "block" }}
          />
        </div>
        <div className="flex justify-center relative gap-[150px]">
          {/* Left side: Image */}
          <div className="flex items-center relative w-2xl">
            <Image
              src="/mountain-landscape.jpg"
              alt="Mountain landscape"
              width={500}
              height={400}
              className="rounded-xl shadow-xl object-cover static z-20 w-96"
              style={{ borderRadius: "16px" }}
            />
            <Image
              src="/some-horse.png"
              alt="Horses at sunset"
              width={400}
              height={260}
              className="rounded-xl shadow-xl object-cover absolute right-0 z-30"
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              }}
            />
          </div>
          {/* Right side: Text */}
          <div className="z-20">
            <div className="flex text-2xl font-normal font-['Bebas_Neue'] gap-2">
              <span className="text-black ">Why choose</span>
              <span className="text-red-400">Virgn terra</span>
            </div>
            <div className="w-52 inline-flex justify-start items-center gap-2  text-black text-6xl font-normal font-['Bebas_Neue']">
              <p>we</p>
              <p>love</p>
              <p>travel</p>
            </div>
            <p className="text-gray-700 text-lg mb-6 max-w-xl">
              Because we're not just about travel; we're about creating stories
              and memories. Our expert team leverages the VIRGN TERRA travel to
              bring you authentic and immersive experiences. With VIRGN TERRA,
              we ensure that all travel documentation is seamless and secure,
              enhancing your journey from start to finish.
            </p>
            <p className="text-gray-700 text-lg mb-10 max-w-xl">
              Moreover, we take great pleasure of the fact that we work directly
              with the locals, enabling us to support the communities we visit.
              We believe in responsible and sustainable tourism that benefits
              both travelers and the locals alike.
            </p>
            <Button className="flex items-center justify-center text-2xl font-normal font-['Bebas_Neue'] tracking-wide rounded-sm h-12 min-w-[128px] transition-color cursor-pointer  duration-200 text-[var(--foreground)] hover:text-[var(--popover-foreground)] bg-[var(--background)] hover:bg-[var(--popover)]">
              ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
