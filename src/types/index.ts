
export interface Product {
    id:number,
    viName: string;
    enName: string;
    size: { minWeight: number; maxWeight: number; price: number }[];
    discount: number;
    img: string;
    lot: number;
    description: string;
}
