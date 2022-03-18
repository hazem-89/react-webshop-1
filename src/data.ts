export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    amount: number;
}

export interface UserData {
    name: string;
    email: string;
    phone: string;
    adress: string;
}

export interface DeliveryData {
    delivery: string;
    price: string;
    time: string;
}

export interface OrderKey {
    key: number;
}

export interface AdminUser {
    adminName: string;
    adminPassword: string;
}