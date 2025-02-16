import { useTranslations } from "next-intl";
import { MdOutlineSearch } from "react-icons/md";


interface props extends React.HTMLProps<HTMLInputElement> {
    className?: string;
}
export default function Input(props: props) {
    const t = useTranslations("Navigation");
    return (
        <div className={`border-2 w-fit h-fit relative border-gray-200  rounded-sm text-gray-500 focus-within:text-black focus-within:border-black ${props?.className && props?.className}`}>
            <input placeholder={t("Search")} className="outline-0 pl-4 py-1 pr-10" />
            <MdOutlineSearch className="absolute top-0 right-2 m-auto bottom-0 cursor-pointer" size="25px" />
        </div>
    )
}