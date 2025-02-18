import { Product } from "@/types"; // Nếu dùng alias
// import { Product } from "../../types"; // Nếu không dùng alias

interface Props extends React.HTMLProps<HTMLDivElement> {
    product: Product;
}

export default function Card({ product, ...rest }: Props) {
    return (
        <div {...rest} className="border border-gray-400 pb-4  shadow-md w-fit flex flex-col items-center relative cursor-pointer">
            <img src={product.img} alt={product.enName} className=" h-72 w-72 object-cover " />

            <h2 className="text-lg font-bold mt-3 mb-1">{product.enName} ({product.viName})</h2>
            {/* <pre className="text-gray-600 text-wrap">{product.description}</pre> */}
            <div className="flex gap-1 items-end">
                <p className="text-lg ">{product.size[0].price}đ</p>
                <p className="text-gray-500 line-through text-sm">{product.size[0].price - product.size[0].price * product.discount / 100}đ</p>
            </div>
            <p className="font-bold absolute top-4 right-4 bg-red-500 rounded-full h-11 w-11  text-white flex items-center justify-center">{product.discount}%</p>
        </div>
    );
}
