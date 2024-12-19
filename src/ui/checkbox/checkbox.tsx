import { FC, ReactNode, MouseEvent } from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps {
  id: string;
  label: string;
  children?: ReactNode;
  onClick?: () => void;
  isChecked?: boolean;
  onMouseLeave?: (evt: MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (evt: MouseEvent<HTMLDivElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  onMouseEnter,
  onMouseLeave,
  isChecked,
  id,
  label,
  onClick,
  children,
}) => {
  return (
    <>
      <div
        className={styles.checkbox}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => null}
        />
        <label htmlFor={id} onClick={onClick}>
          {label}
        </label>
        {children}
      </div>
    </>
  );
};
