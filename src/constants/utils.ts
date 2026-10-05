export interface CartItem {
    id: string;
    name: string;
    price: number;
    qty: number;
}

export const formatRupiah = (angka: number): string => {
    return `Rp ${angka.toLocaleString("id-ID")}`;
};

export const hitungTotal = (items: CartItem[]): number => {
    let total = 0;
    items.map((item) => {
        total = total + (item.price * item.qty);
    });
    return total;
};