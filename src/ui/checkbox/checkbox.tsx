import { FC, ReactNode, MouseEventHandler } from "react";
import styles from "./checkbox.module.scss";

type CheckboxProps = {
  id: string;
  label: string;
  children?: ReactNode;
  onClick?: VoidFunction;
  checked?: boolean;
  onMouseLeave?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
};

export const Checkbox: FC<CheckboxProps> = ({ onMouseEnter, onMouseLeave, checked, id, label, onClick, children }) => {
  return (
    <div className={styles.checkbox} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <input type="checkbox" id={id} checked={checked} onChange={() => null} />
      <label htmlFor={id} onClick={onClick}>
        {label}
      </label>
      {children}
    </div>
  );
};
