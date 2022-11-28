import React from "react";
import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary"; // bcgov primary or secondary
  onClick: () => void;
}

export const Button = ({ children, color = "primary", onClick } : IButtonProps) => {
  const isPrimary: boolean = color === "primary";
  return (
    <button
      onClick={onClick}
      className={isPrimary ? "BC-Gov-PrimaryButton" : "BC-Gov-SecondaryButton"}
    >
      {children}
    </button>
  );
};
