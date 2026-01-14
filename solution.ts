function formatValue(value:string | number | boolean):(string | number | boolean){
    if(typeof value==="string"){
        return value.toUpperCase();
    }
    else if (typeof value==="number"){
        return value*10;
    }
    else{
        return !value;
    }
}
function getLength(value:string | any[]):number{
    return value.length;
}
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    getDetails():string{
        return "Name: "+this.name+", Age: "+this.age;
    }
}
function filterByRating(arr:object[]):object[]{
    return arr.filter((item)=> item.rating>=4.0)
}
function filterActiveUsers(arr:object[]):object[]{
    return arr.filter((item)=>item.isActive===true)
}
interface Book{
    title:string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
function printBookDetails(book:Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`);
}
function getUniqueValues<T extends number|string>(arr1:T[],arr2:T[]):T[]{
    const mp = new Map<T,number>();
    const result = new Array<T>();
    for(let i=0;i<arr1.length;i++){
        if(!mp.get(arr1[i])){
            mp.set(arr1[i],1);
            result.push(arr1[i]);
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!mp.get(arr2[i])){
            mp.set(arr2[i],1);
            result.push(arr2[i]);
        }
    }
    return result;
}
function calculateTotalPrice<T extends {name:string,price:number, quantity: number, discount?: number}>(products:T[]):number{
    if(products.length===0) return 0;
    else{
        return products.reduce((sum,product)=>{
            let productPrice:number = product.price*product.quantity;
            return sum+productPrice-(productPrice*(product.discount??0)/100);
        },0);
    }
}
