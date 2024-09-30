import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function MainContainer({children}: Readonly<PropsWithChildren>) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
}
