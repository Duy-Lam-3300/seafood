'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineSearch } from "react-icons/md";

export default function Navigation() {
    const navLinkMenu = [
        { href: "/home", name: "Home" },
        { href: "/about", name: "About" },
        { href: "/products", name: "Products" },
        { href: "/contact", name: "Contact" },
    ];
    const pathName = usePathname();
    return (
        <nav className="">
            <div className="flex justify-between items-center px-10 my-4">
                <div className="">
                    <div className="logo">
                    </div>
                    <div className="flex gap-10 text-xl text-gray-500 ">
                        {navLinkMenu.map(item => {
                            const isActive = pathName === item.href || (pathName.startsWith(item.href) && item.href !== "/")
                            return (<Link href={item.href} key={item.name}
                                className={`hover:!text-black ${isActive ? "font-semibold !text-black" : ""}`}
                            >{item.name}</Link>);
                        })}
                    </div>
                </div>
                <div className="">
                    <div className="border-2 w-fit h-fit relative">
                        <input placeholder="" className=" "></input>
                        <MdOutlineSearch className="absolute" size="25px" />
                    </div>
                </div>
            </div>
            <hr></hr>
        </nav>
    )
}