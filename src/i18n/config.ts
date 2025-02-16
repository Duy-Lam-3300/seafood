export const locales = ["en(US)", "en(UK)", "vn"] as const;
export type Locale = (typeof locales)[number];
export const supportingLocale = [
    {
        name: "English (US)",
        dataName: "en(US)",

    },
    {
        name: "English (UK)",
        dataName: "en(UK)",


    },
    {
        name: "Việt Nam",
        dataName: "vn",

    }
] as const;
export const defaultLocale: Locale = "en(US)";
