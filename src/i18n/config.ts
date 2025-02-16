export const locales = ["en", "vn"] as const;
export type Locale = (typeof locales)[number];
export const supportingLocale = [
    {
        name: "English",
        dataName: "en",

    },

    {
        name: "Việt Nam",
        dataName: "vn",

    }
] as const;
export const defaultLocale: Locale = "en";
