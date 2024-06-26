import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

export default function Desktop4Featurerow({
  image = "img_rectangle_10.png",
  title = "Video and Photo Production",
  description = "Capture the essence of your moments with our professional video and photography services. We blend clarity and creativity to produce visually stunning content that tells your story in the most compelling way.",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-4 bg-[#ffffff] shadow-[0_4px_4px_0_#0000003f] rounded-[5px]`}
    >
      <Img
        src={image}
        width={454}
        height={300}
        alt="media image"
        className="h-[300px] w-full rounded-tl-[5px] rounded-tr-[5px] object-cover"
      />
      <div className="mb-7 flex flex-col items-start justify-center gap-3.5 self-stretch py-3">
        <Heading size="display_xs_semibold" as="h4" className="ml-3 !text-[#1e1b4b]">
          {title}
        </Heading>
        <Text size="text_lg_regular" as="p" className="ml-3 self-stretch leading-7 !text-[#1e1b4b]">
          {description}
        </Text>
      </div>
    </div>
  );
}
