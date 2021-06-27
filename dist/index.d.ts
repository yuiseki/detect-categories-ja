interface Category {
    id: string;
    name: string;
    words: string[];
}
export declare const categories: Category[];
interface DetectResult {
    id: string;
    name: string;
    count: number;
}
export declare const detectCategories: (text: string) => Promise<DetectResult[]>;
export {};
