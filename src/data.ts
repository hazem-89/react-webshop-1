export interface Product {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    image: string;
    amount: number;
    size: any;
}

export interface UserData {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface DeliveryData {
    delivery: string;
    price: string;
    time: string;
}

export interface PaymentData {
    cardNumber: string;
    expirationDate: string;
    secureCode: string;
}

export interface OrderKey {
    key: number;
}

export interface AdminUser {
    adminName: string;
    adminPassword: string;
}
export interface sizeOptions {
    value: string;
    label: string;
}