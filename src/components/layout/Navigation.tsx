'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDehaze, MdOutlineSearch } from "react-icons/md";
import Input from "./SearchBox";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function Navigation() {
    const t = useTranslations('Navigation');
    const pathName = usePathname();
    const [isOpenAndroidMenu, openAndroidMenu] = useState(false);

    const navLinkMenu = [
        { href: "/home", name: t("Home") },
        { href: "/about", name: t("About") },
        { href: "/products", name: t("Products") },
        { href: "/contact", name: t("Contact") },
    ];
    return (
        <nav className="w-full grid grid-cols-12">
            <div className="hidden justify-between items-center xl:flex h-[5.5rem] col-span-10 col-start-2">
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
            <div className="xl:hidden flex justify-between items-center relative h-[5.5rem] col-span-10 col-start-2">
                <button className="text-3xl cursor-pointer z-50 text-gray-500 hover:text-black " onClick={() => openAndroidMenu((prev) => !prev)}><MdDehaze /></button>

                {/* <MdDehaze /> */}



                <div className="text-xl font-bold w-full text-center">Seafood</div>
                <div className="absolute right-0">    <LanguageSwitcher /></div>
            </div>
            {isOpenAndroidMenu && (
                //fix h and w
                <div className="absolute px-14 max-md:text-2xl md-top-[5.5rem] pt-[5rem]  xl:hidden left-0 w-[100vw] h-[100vh] md:w-fit md:h-fit bg-white shadow-md py-2 rounded-md border">
                    {/* <button className="text-3xl cursor-pointer text-gray-500 py-[2rem] hover:text-black " onClick={() => openAndroidMenu((prev) => !prev)}><MdDehaze /></button> */}
                    <Input className="w-full md:w-fit! max-md:py-2" />
                    {navLinkMenu.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-4 md:py-2 text-gray-700 hover:bg-gray-200 hover:text-black transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}