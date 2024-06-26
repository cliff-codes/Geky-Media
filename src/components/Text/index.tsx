import React from "react";

const sizes = {
  text_lg_regular: "text-lg font-normal not-italic",
  text_md_regular: "text-base font-normal not-italic",
  textxs: "text-base font-normal not-italic",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "text_md_regular",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#ffffff] font-['Plus_Jakarta_Sans'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
