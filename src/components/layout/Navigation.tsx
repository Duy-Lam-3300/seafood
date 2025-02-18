'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDehaze, MdOutlineSearch } from "react-icons/md";
import Input from "./SearchBox";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
    const t = useTranslations('Navigation');
    const pathName = usePathname();

    const navLinkMenu = [
        { href: "/home", name: t("Home") },
        { href: "/about", name: t("About") },
        { href: "/products", name: t("Products") },
        { href: "/contact", name: t("Contact") },
    ];
    return (
        <nav className="w-full">
            <div className="hidden justify-between items-center px-10 md:flex h-[5.5rem]">
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
                <div className="w-fit flex gap-10 items-center">
                    <LanguageSwitcher />
                    <Input actionPath="/products"
                        dataQuery="name"
                        defaultValue="" />
                </div>
            </div>
            <div className="md:hidden flex justify-between px-10 my-4 relative">
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
                <div>    <LanguageSwitcher /></div>

            </div>
        </nav>
    )
}