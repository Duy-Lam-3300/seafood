"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function changeLocale(newLocale: string) {
    (await cookies()).set("locale", newLocale, { path: "/" }); // Set language in cookie
    redirect("/"); // Reload the page to apply the new language
}
