export interface Snack {
    id?: number;
    name: string;
    img: string;
    type: string;
    price: number;
    description: string;
}

export interface TypedSnack {
    type: string;
    snacks: Snack[];
}
