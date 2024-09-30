import { UrlObject } from "node:url";
import Link from "next/link";
import styles from "./index.module.scss";

type NavlinkProps = {
    displayText: string;
    linkPath: string | UrlObject;
}
export default function NavLinks({ displayText, linkPath }: Readonly<NavlinkProps>) {
    return (
        <Link href ={linkPath}  className={styles.navlink}>{displayText}</Link>
    );
}