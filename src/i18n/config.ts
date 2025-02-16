export const locales = ["en", "vn"] as const;
export type Locale = (typeof locales)[number];
export const supportingLocale = [
    {
        name: "English",
        dataName: "en",
        flag: "",
    },
    {
        name: "Việt Nam",
        dataName: "vn",
        flag: "",
    }
] as const;
export const defaultLocale: Locale = "en";
