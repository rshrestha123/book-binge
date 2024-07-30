import styles from "./exercise.module.scss";
import { PropsWithChildren } from "react";

type ExerciseProps = {
  lessonNumber: string;
  title: string;
};

export default function Exercise({
  children,
  lessonNumber,
  title,
}: PropsWithChildren<ExerciseProps>) {
  return (
    <section className={styles.exerciseContainer}>
      <div className={styles.headerBlock}>
        <div>{lessonNumber}</div>
        <div>
          <p>Exersize {lessonNumber}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles.contentBlock}>{children}</div>
    </section>
  );
}
