import styles from "../index.module.scss";
import Exercise from "@/util-components/exercise";

export default function Exercise01() {
  return (
    <Exercise lessonNumber={"01"} title={"Components and Composition"}>
      <Children01 />
    </Exercise>
  );
}

function Children01() {
  return <div>Do stuff here</div>;
}
