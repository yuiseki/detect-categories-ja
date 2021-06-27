interface Category {
    id: string;
    name: string;
    words: string[];
}
export declare const categories: Category[];
export declare const detectCategories: (text: string) => Promise<{
    id: string;
    name: string;
}[]>;
export {};
