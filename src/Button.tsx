import React from "react";

// 1. Define props type for Button
type ButtonProps = {
  label: string;          // Text to display on button
  primary?: boolean;      // Whether it's a primary button (default: false)
  onClick?: () => void;   // Click handler
};

// 2. Functional component
export const ButtonComponent: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  return (
    <button
      className={["storybook-button", mode].join(" ")} // apply styles
      onClick={onClick}
    >
      {label}
    </button>
  );
};
