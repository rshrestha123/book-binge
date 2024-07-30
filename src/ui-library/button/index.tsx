import styles from "./index.module.scss";
import { PropsWithChildren } from "react";

type ButtonProps = {
  onClickCallback: () => void;
  variant?: "primary" | "passive";
};

export default function Button({
  children,
  onClickCallback,
  variant = "primary",
}: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClickCallback} className={styles[variant]}>
      {children}
    </button>
  );
}
