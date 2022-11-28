import React from "react";
import "./Button.scss";

interface IButtonProps {
  children: React.ReactNode;
  color?: "BC-Gov-PrimaryButton" | "BC-Gov-SecondaryButton";
  onClick: () => void;
}

export const Button = ({ children, color = "BC-Gov-PrimaryButton", onClick } : IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={color}
    >
      {children}
    </button>
  );
};
