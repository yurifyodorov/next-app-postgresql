'use client';

import React, { useCallback } from "react";

import Button from "../Button";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Form: React.FC<FormProps> = ({
    onSubmit,
    title,
    body,
    actionLabel,
    footer,
    disabled,
    secondaryAction,
    secondaryActionLabel
  }) => {

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  return (
    <>
      <form className={styles.wrapper}>
        <div
        >
          {/* content */}
          <div>
            <div>{title}</div>

            {/* body */}
            <div>{body}</div>

            {/* footer */}
            <div>
              <div className={styles.submit}>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
      </form>
    </>
  );
}

export default Form;