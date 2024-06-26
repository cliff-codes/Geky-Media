import React from "react";

const sizes = {
  text_md_semibold: "text-base font-semibold",
  display_sm_semibold: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  display_xs_semibold: "text-2xl font-semibold md:text-[22px]",
  text_xl_semibold: "text-xl font-semibold",
  text_lg_semibold: "text-lg font-semibold",
  headingxs: "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "text_md_semibold",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#f5f5fa] font-['Plus_Jakarta_Sans'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
