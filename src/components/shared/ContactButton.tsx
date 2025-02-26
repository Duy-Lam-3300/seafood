import { contact } from "@/types/data";



export default function ContactButtonList() {
    return (
        <div className="flex gap-4 items-center m-1">
            {contact.map(item => (
                <a className="hover:scale-110" key={item.name} href={item.link}><item.Icon size="50" /></a>
            ))}
        </div>
    )
}