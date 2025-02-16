'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDehaze, MdOutlineSearch } from "react-icons/md";
import Input from "../shared/InputBox";

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
            <div className="hidden justify-between items-center px-10 my-4 sm:flex">
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
                <div className="w-fit">
                    <Input />
                </div>
            </div>
            <div className="sm:hidden flex justify-between px-10 my-4 relative">
                {/* <button className="text-3xl cursor-pointer text-gray-500 hover:text-black "><MdDehaze /></button> */}
                <details className="animationDetail">
                    <summary className="text-3xl cursor-pointer text-gray-500 hover:text-black">
                        <MdDehaze />
                    </summary>
                    <div className="absolute left-0 top-[2.9rem] w-fit bg-white shadow-md py-2 px-1 rounded-md border">
                        <Input />
                        {navLinkMenu.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </details>
                <div className="text-xl font-bold">Seafood</div>
                <div>vn</div>

            </div>
            <hr></hr>
        </nav>
    )
}