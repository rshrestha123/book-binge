import styles from "./index.module.scss";
import Link from "next/link";
import { PropsWithChildren } from "react";

type LayoutProps = {
  lessonNumber: string;
};

export default function Layout({ children, lessonNumber }: PropsWithChildren<LayoutProps>) {
  return (
    <div className={styles.sandboxContainer}>
      <h1>React Foundations Sandbox</h1>
      {children}
      <Link className={styles.lessonLink} href={`/sandbox/exercises/${lessonNumber}`}>
        Exercise {lessonNumber} »
      </Link>
    </div>
  );
}
