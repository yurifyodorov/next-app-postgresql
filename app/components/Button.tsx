'use client';

import React from "react";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
  }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;