import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="py-[40px] px-11 bg-orange-50 overflow-hidden flex justify-center items-center">
      <div className="flex relative">
        {/* border layer */}
        <div className="absolute right-0 w-[800px]">
          <Image
            src="/borderLine.svg"
            alt="Border layer"
            width={100}
            height={100}
            className="object-contain w-full h-full "
          />
        </div>

        <div className="static flex justify-center items-center gap-[150px] z-20">
          <div className="flex items-center relative">
            <Image
              src="/person-silhouette.png"
              alt="Mountain landscape"
              width={500}
              height={400}
              className=" shadow-xl object-cover static"
            />
          </div>
          <div className="w-[710px] justify-start text-zinc-800 text-4xl font-normal font-['Bebas_Neue']">
            "Interacting with local communities enriched our understanding of
            the region. The local guides were knowledgeable and passionate about
            preserving their environment."
          </div>
        </div>
      </div>
    </section>
  );
}
