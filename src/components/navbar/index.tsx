import Navlink from "@/components/navbar/navlinks";
import styles from "./index.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href={"/"} className={styles.appName}>
          <FontAwesomeIcon icon={faBookOpen} className={styles.icon} />
          Book Binge
        </Link>
      </div>
      <ul>
        <li>
          <Navlink displayText={"Search"} linkPath={"/"} />
        </li>
        <li>
          <Navlink displayText={"Want to read"} linkPath={"want-to-read"} />
        </li>
        <li>
          <Navlink displayText={"Finished reading"} linkPath={"finished-reading"} />
        </li>
      </ul>
    </div>
  );
}
