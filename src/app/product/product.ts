export class Product{
    id : number;
    name:string;
    price:number;
    categoryId:number;
    description:string;
    imageUrl:string;
    constructor(){
        this.id=1;
        this.name="Laptop";
        this.price=1500;
        this.categoryId=1;
        this.description="Description example";
        this.imageUrl="/img.url";
    }

}