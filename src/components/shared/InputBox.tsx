import { MdOutlineSearch } from "react-icons/md";


interface props extends React.HTMLProps<HTMLInputElement> {
    className?: string;
}
export default function Input(props: props) {
    return (
        <div className={`border-2 w-fit h-fit relative border-gray-200  rounded-2xl text-gray-500 focus-within:text-black focus-within:border-black ${props?.className && props?.className}`}>
            <input placeholder="Search" className="outline-0 pl-4 py-1 pr-10"/>
            <MdOutlineSearch className="absolute top-0 right-2 m-auto bottom-0 cursor-pointer" size="25px" />
        </div>
    )
}