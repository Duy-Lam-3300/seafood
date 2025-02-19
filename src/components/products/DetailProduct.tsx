'use client'
import { Product } from "@/types";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";

interface props extends React.HTMLProps<HTMLDivElement> {
    product: Product;
    locale?: string;
}

export default function DetailProduct({ product, ...rest }: props) {
    const [type, setType] = useState<number>(0);
    return (<div className="flex">
        {/* <div className="flex flex-col items-center p-4">
            <img src={product.img} alt={product.enName} className="w-72 h-72 object-cover mb-4" />
            <h2 className="text-xl font-bold">{product.enName} ({product.viName})</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-2">
                <p className="text-lg font-bold">{product.size[0].price}đ</p>
                <p className="text-sm text-gray-500 line-through">
                    {product.size[0].price - (product.size[0].price * product.discount) / 100}đ
                </p>
            </div>
            <span className="mt-2 px-3 py-1 bg-red-500 text-white rounded-full">
                {product.discount}% OFF
            </span>
        </div> */}

        <div className="">
            <img src={product.img} alt={product.enName} className="w-[35rem] h-[35rem] object-cover mb-4" />
        </div>
        <div>
            <h2 className="text-3xl font-semibold">{rest.locale === "en" ? product.enName : product.viName}</h2>
            <div className="mt-2 flex gap-4 items-center">
                <p className="text-2xl font-bold">{product.size[0].price}đ</p>
                <p className="text-sm text-gray-500 line-through">
                    {product.size[0].price - (product.size[0].price * product.discount) / 100}đ
                </p>
            </div>
            <div className="flex items-center gap-4">
                {product.size.map((pro, index) => (
                    <div className={`border-2 ${type === index ? "border-blue-500 " : "border-gray-300 text-gray-400"} px-3 pr-4 py-1 cursor-pointer relative`} onClick={() => setType(index)}>
                        <p><span className="font-semibold text-lg">Size:</span> {pro.description}</p>

                        {type === index &&

                            <>
                                <div className="border-b-[20px] border-b-blue-500 w-fit h-fit border-l-[20px] border-l-transparent absolute bottom-0 right-0">
                                </div>
                                <PiCheckBold className="text-[10px] font-bold absolute bottom-[1.5px] right-[1.5px]  text-white" />
                            </>
                        }
                    </div>))}
            </div>
            <div>
                <div className="mt-4">
                    <p className="whitespace-pre-line">{product.description.trim()}</p>
                </div>
            </div>
        </div>
    </div>)
}