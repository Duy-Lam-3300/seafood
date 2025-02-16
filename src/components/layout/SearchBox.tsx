import { useTranslations } from "next-intl";
import { MdOutlineSearch } from "react-icons/md";


interface props extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    actionPath?: string;
    dataQuery?: string;
    defaultValue?: string
}
export default function Input(props: props) {
    const t = useTranslations("Navigation");
    return (
        <form action={props.actionPath} className={`border-2 w-fit h-fit relative border-gray-200  rounded-sm text-gray-500 focus-within:text-black focus-within:border-black ${props?.className && props?.className}`}>
            <input type="text" name={props.dataQuery} defaultValue={props.defaultValue} placeholder={t("Search")} className="outline-0 pl-4 py-1 pr-10" />
            <button type="submit" className="absolute top-0 right-2 m-auto bottom-0 cursor-pointer">
                <MdOutlineSearch size="25px" />
            </button>
        </form>
    )
}