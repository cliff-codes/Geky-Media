import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} id="footer" className={`${props.className} flex justify-center items-center py-8 sm:py-5 bg-[#522463]`}>
      <div className="container-xs mb-3 flex justify-center md:p-5">
        <div className="flex w-full flex-col gap-2.5">
          <div className="flex flex-col items-center gap-2 p-3.5">
            <Heading size="display_sm_semibold" as="h3">
              About Us
            </Heading>
            <div className="h-[4px] w-[10%] rounded-sm bg-[#9840b2]" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Heading size="text_xl_semibold" as="h5">
                  Who We Are
                </Heading>
              </div>
              <Text size="textxs" as="p" className="leading-[26px] !text-[#f5f5fa]">
                At GEky Media, we are a passionate team of professionals who believe in the power of creativity and
                innovation. Our mission is to bring your ideas to life through our wide range of services, including
                book printing, invitation card printing, video and photo production, and website development. With years
                of experience and a commitment to excellence, we strive to deliver outstanding results that exceed your
                expectations.
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Heading size="text_lg_semibold" as="h6" className="!text-[#ffffff]">
                  <span className="text-xl text-[#ffffff]">Our</span>
                  <span className="text-[#ffffff]">&nbsp;</span>
                  <span className="text-xl text-[#ffffff]">Commitment</span>
                </Heading>
              </div>
              <Text size="textxs" as="p" className="leading-[26px] !text-[#f5f5fa]">
                We are dedicated to providing personalized service and attention to detail in every project we
                undertake. Our goal is to build lasting relationships with our clients by delivering exceptional quality
                and value. Whether you&#39;re a small business, an individual, or a large organization, we are here to
                meet your needs and help you achieve your goals.
              </Text>
            </div>
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex flex-col items-start justify-center gap-2.5">
                <Heading size="text_xl_semibold" as="h5" className="!text-[#ffffff]">
                  Our Socials
                </Heading>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2.5">
                      <Img
                        src="img_volume.svg"
                        width={34}
                        height={34}
                        alt="whatsapp icon"
                        className="h-[34px] w-[34px]"
                      />
                      <Text as="p" className="mb-1.5 self-end">
                        0558776503
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="img_facebook.svg"
                        width={34}
                        height={34}
                        alt="facebook icon"
                        className="h-[34px] w-[34px]"
                      />
                      <Text as="p" className="self-end">
                        GEky Media
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-5 sm:flex-col">
                    <div className="flex items-center gap-2.5">
                      <Img src="img_call.svg" width={34} height={34} alt="call icon" className="h-[34px] w-[34px]" />
                      <Text as="p" className="mb-1.5 self-end">
                        0242183413
                      </Text>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-[34px] flex-col justify-center bg-[url(/images/img_group_1.svg)] bg-cover bg-no-repeat px-1 py-1.5 md:h-auto">
                        <Img src="img_lock.svg" width={24} height={18} alt="lock icon" className="h-[18px]" />
                      </div>
                      <Text as="p" className="mb-1 self-end">
                        gekymedia@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[30%] flex-col items-start justify-center gap-2 self-center md:w-full">
                <Heading size="text_xl_semibold" as="h5" className="!text-[#ffffff]">
                  Our Location
                </Heading>
                <Text as="p" className="self-stretch leading-6">
                  We are conveniently located in Drobo, Jaman South District of the Bono Region. Our central location
                  allows us to serve clients from across the region and beyond.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
