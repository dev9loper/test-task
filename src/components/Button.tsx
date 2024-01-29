import React, { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="submit"
      className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold enabled:hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
