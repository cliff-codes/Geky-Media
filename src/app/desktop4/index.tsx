import { Heading, Img, Button } from "../../components";
import Desktop4Featurerow from "../../components/Desktop4Featurerow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const data = [
  {},
  {
    image: "img_rectangle_10_300x454.png",
    title: "Website Development",
    description:
      "Transform your online presence with our innovative website designs that not only look great but also function seamlessly. Our websites are tailored to provide your audience with an exceptional user experience, ensuring they stay engaged and connected.",
  },
  {
    image: "img_rectangle_10_1.png",
    title: "Book Printing",
    description:
      "Our book printing services offer high-quality solutions for authors and publishers, ensuring that every page is beautifully brought to life. From vibrant covers to crisp text, we make sure your stories are printed with the utmost care and precision.",
  },
  {
    image: "img_rectangle_10_2.png",
    title: "Invitation Card Printing",
    description:
      "Make your special occasions truly unforgettable with our custom-designed invitation cards. Whether it&#39;s a wedding, corporate event, or birthday celebration, our bespoke designs are crafted to leave a lasting impression on your guests.",
  },
];

export default function Desktop4Page() {
  return (
    <div className="w-full h-full bg-[#f5f5fa]">
      {/* header section */}
      <Header />
      <div>
        {/* hero section */}
        <div className="flex flex-col justify-center bg-[#000000bf] py-[180px] md:py-5 bg-cover bg-[url('/images/hero-bg.jpg')] relative">
          <div className="container-xs flex flex-col items-center gap-2.5 px-14 md:p-5 md:px-5">
            <div className="absolute top-0 right-0 h-full w-full bg-black opacity-70 z-0"></div>
            <div className="self-stretch py-[30px] sm:py-5 z-50">
              <Heading
                size="headingxs"
                as="h1"
                className="#0000003f] 4px 4px text-shadow-[2px text-center leading-[86px] tracking-[-0.96px] xs:leading-5 "
              >
                <span className="font-['Poppins'] font-normal text-[#f5f5fa] drop-shadow-lg">
                  We bring your vision to life with our comprehensive suite of
                </span>
                <span className="font-['Poiret_One'] font-normal text-[#f5f5fa]">&nbsp;</span>
                <span className="font-['Poppins'] text-[#9840b2]">creative services.</span>
              </Heading>
            </div>
            <Button size="sm" shape="round" className="min-w-[202px] sm:px-5 hover:bg-[#D597E8] transition all .05s ease hover:text-[#1E1B4B] z-50">
              View Our Services
            </Button>
          </div>
        </div>

        {/* services section */}
        <div className="relative  bg-[#ffffff] w-full flex flex-col place-items-center">
          <Img
            src="img_frame.png"
            width={852}
            height={1084}
            alt="image frame"
            className="absolute right-[1.00px] top-[0.00px] m-auto h-[1084px] w-[58%] object-cover "
          />
          <div className="  my-auto max-w-7xl flex h-max justify-center md:p-5">
            <div id="services" className="flex w-full flex-col gap-[26px] p-3">
              <div className="flex flex-col items-center gap-2 p-3.5">
                <Heading size="display_sm_semibold" as="h2" className="!text-[#1e1b4b]">
                  What We Do
                </Heading>
                <div className="h-[4px] w-[10%] rounded-sm bg-[#9840b2]" />
              </div>
              <div className="mb-[42px] z-10">
                <div id="services" className="grid grid-cols-2 sm:grid-cols-1 justify-center gap-8 gap-y-12 px-[70px] xs:px-0 py-4 md:grid-cols-1 md:px-5 ">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <Desktop4Featurerow {...d} key={"featuresGrid" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
}
