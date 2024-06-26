"use client"
import { Button, Heading, Img } from "./..";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center bg-[#522463] shadow-[0_2px_4px_0_#0000003f] xs:h-24`}
    >
      <div className="container-xs flex justify-center md:p-5">
        <div className="w-full">
          <div className="flex items-center justify-between gap-5 py-4">
            <Img
              src="img_header_logo.png"
              width={196}
              height={46}
              alt="header logo"
              className="h-[46px] w-[196px] xs:h-9 xs:w-40 object-contain"
            />
            <ul className="flex flex-wrap gap-3 ms:hidden">
              <li>
                <Link href="/">
                  <Heading as="h6">Home</Heading>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <button onClick={ 
                    () => {
                      const sectionElement = document.getElementById("services")

                      //scroll into view
                      sectionElement?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }
                  }>
                    <Heading as="h6">Our services</Heading>
                  </button>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <button onClick={() => {
                    const sectionElement = document.getElementById("footer")

                    //scroll into view
                    sectionElement?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}>
                    <Heading as="h6">About us</Heading>
                  </button>
                </Link>
              </li>
            </ul>
            <Button shape="round" className="min-w-[116px] ms:hidden">
              Talk to us
            </Button>

            <Button shape="round" className="min-w-[40px] ms:flex hidden hover:bg-[#D597E8] transition all .05s ease hover:text-[#1E1B4B]">
              <IoMenu className="text-lg"  />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
