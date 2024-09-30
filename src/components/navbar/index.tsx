import Navlink from "@/components/navbar/navlinks";

export default function Navbar() {
    return(<div>
        <Navlink displayText={"Book Binge"} linkPath={"/"}/>
        <ul>
            <li><Navlink displayText={"Search"} linkPath={"/"}/></li>
            <li><Navlink displayText={"Want to read"} linkPath={"want-to-read"} /></li>
            <li><Navlink displayText={"Finished reading"} linkPath={"finished-reading"} /></li>
        </ul>
    </div>)
}