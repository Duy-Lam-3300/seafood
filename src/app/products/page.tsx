import Card from "@/components/products/Card";
import { Product } from "@/types";



export default function Products() {
    const productsDatas: Product[] = [
        {
            id: 1,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 2,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 3,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 4,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 5,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 6,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
        {
            id: 7,
            viName: "Cua hoàng đế",
            enName: "King crab",
            size: [
                { minWeight: 1.9, maxWeight: 3, price: 3190000 },
                { minWeight: 1.5, maxWeight: 1.9, price: 3190000 },
            ],
            discount: 28,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `
            Xuất xứ: Canada, Mỹ, vùng biển Alaska
            Quy cách: Cua sống nhập khẩu
            Dinh dưỡng: được mệnh danh là vua của loài cua nên King Crab có đầy đủ chất dinh dưỡng cần thiết cho con người đặc biệt là : tăng cường sinh lý chon nam giới, tốt cho tim mạch ngăn ngừa các bệnh về tim, tốt cho mẹ và trẻ sơ sinh, tốt cho vận động viên cần giữ vóc dáng, giảm cân.
            Size: 2kg – 4kg/con
            Món ngon: hấp bia để tăng độ ngọt của cua mà không làm mất đi hương vị tự nhiên của món ăn.`
        },
    ]
    return (<div className="h-full w-full ">
        <div className="w-fit">
            <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-start place-items-center justify-center">
                {productsDatas?.map(pro => (
                    <Card product={pro} className="h-fit bg-white " key={pro.id} />
                ))}
            </div>
        </div>
    </div>)
}