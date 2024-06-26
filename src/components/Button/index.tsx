import React from "react";

const shapes = {
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    purple_400: "bg-[#9840b2] shadow-[0_4px_4px_0_#0000003f] text-[#f5f5fa]",
  },
} as const;
const sizes = {
  xs: "h-[48px] px-6 text-base",
  sm: "h-[56px] px-8 text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "purple_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-[#f5f5fa] text-base font-medium bg-[#9840b2] shadow-[0_4px_4px_0_#0000003f] rounded-[5px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
