"use client";

import { useEffect, useState } from "react";
import { changeLocale } from "../utils/change-locale";
import { defaultLocale, supportingLocale } from "@/i18n/config";
import Image from "next/image";


export default function LanguageSwitcher() {
    const [selectedLocale, setSelectedLocale] = useState(String(defaultLocale));

    useEffect(() => {
        const match = document.cookie.match(/(^| )locale=([^;]+)/);
        if (match) setSelectedLocale(match[2]); // Extract locale from cookie
    }, []);

    return (
        <form action={async (formData) => {
            await changeLocale(formData.get("locale") as string);
        }}>
            <select className="border-2 px-1 py-1 border-gray-300 focus-within:border-blue-500 active:border-blue-500 rounded-sm w-[7.8rem]" name="locale"  value={selectedLocale} onChange={(e) => e.currentTarget.form?.requestSubmit()}>
                {supportingLocale?.map(item => (
                    <option value={item.dataName} key={item.dataName}>
                        {item.name}</option>
                ))}
                {/* <option value="en">English</option>
                <option value="vn">Tiếng Việt</option> */}

            </select>
        </form>
    );
}
