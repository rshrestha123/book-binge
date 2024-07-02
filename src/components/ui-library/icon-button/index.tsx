import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Tooltip } from "react-tooltip";

type IconButtonProps = {
  onClickCallback: () => void;
  icon: IconProp;
  tooltip: string;
  variant?: "primary" | "secondary" | "accent";
};

export default function IconButton({
  onClickCallback,
  icon,
  tooltip,
  variant = "primary",
}: IconButtonProps) {
  return (
    <>
      <Tooltip id={`icon-tooltip-${variant}`} place="top" />
      <button
        data-tooltip-id={`icon-tooltip-${variant}`}
        data-tooltip-content={tooltip}
        data-tooltip-delay-show={400}
        onClick={onClickCallback}
        className={styles[variant]}
        aria-label={tooltip}
      >
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </button>
    </>
  );
}
