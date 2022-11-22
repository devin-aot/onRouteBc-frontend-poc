import React from "react";
import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  type: string; // bcgov primary or secondary
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ children, type, onClick }) => {
  const isPrimary: boolean = type === "primary";
  return (
    <button
      onClick={onClick}
      className={isPrimary ? "BC-Gov-PrimaryButton" : "BC-Gov-SecondaryButton"}
    >
      {children}
    </button>
  );
};
