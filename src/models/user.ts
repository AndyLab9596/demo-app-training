
export interface User {
    id: number;
    name: string;
    age?: number;
    gender?: 'male' | 'female';
    city?: string;
}