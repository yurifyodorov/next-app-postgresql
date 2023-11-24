'use client';

import React from "react";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";


import styles from "./Input.module.css";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    register,
    required,
  }) => {
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`${styles.input}`}
      />
      <label className={`${styles.label}`}>
        {label}
      </label>
    </div>
  );
}

export default Input;