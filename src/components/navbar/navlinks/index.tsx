import { UrlObject } from "node:url";
import Link from "next/link";

type NavlinkProps = {
    displayText: string;
    linkPath: string | UrlObject;
}
export default function NavLinks({ displayText, linkPath }: Readonly<NavlinkProps>) {
    return (
        <Link href ={linkPath}>{displayText}</Link>
    );
}