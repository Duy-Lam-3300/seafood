
export interface Product {
    id:number,
    viName: string;
    enName: string;
    size: { description:string; price: number }[];
    discount: number;
    img: string;
    lot: number;
    description: string;
}
