import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, Locale, locales } from "./config";

export default getRequestConfig(async () => {
  // Get locale from cookies, default to "en"
  const locale = (await cookies()).get("locale")?.value as Locale || defaultLocale;
  const finalLocale = locales.includes(locale!) ? locale! : defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default,
  };
});
