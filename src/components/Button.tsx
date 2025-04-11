import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => (
  <button
    type={type}
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
  >
    {children}
  </button>
);

export default Button;
