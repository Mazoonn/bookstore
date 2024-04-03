export interface Book {
    author: string;
    description: string;
    id?: number;
    price: string;
    genre: { id:number, name:string } | number;
    publicationDate: string;
    title: string;
}