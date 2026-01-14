
## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Ans:'enums' হচ্ছে এক ধরণের কনস্ট্যান্টকে নাম সেয়ার পদ্ধতি। আমি যদি চাই একটা প্রোগ্রামে যেই কনস্ট্যান্টগুলো আমি ব্যবহার করবো প্রত্যেকটা কিংবা কিছু কন্সট্যান্টের নাম ঠিক করে দিতে যাতে পরে ওই নাম দিয়ে কনস্ট্যান্ট কে এক্সেস করা যায় তাহলে enum ব্যবহার করা যায়।
example: 

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}



আবার যদি আমি চাই যে কোনো একটা ভ্যারিয়েবলের নির্দিষ্ট কিছুই ভ্যালু হতে পারবে সবসময়, এর বাইরে অন্য কোনো ভ্যালু এক্সেপ্টেড না, তখন চাইলে এনাম ব্যবহার করা যায় ।
তাহলে এটা তুলনামূলকভাবে বেশি রিডেবল হয়।

example: enum Direction{
    up, down, left, right;
}

let move: Direction=Direction.up;
console.log(move);


## 5. Provide an example of using union and intersection types in TypeScript.
Ans:Union example: type stringOrNumber = string | number;
function formatValue(value:stringOrNumber):stringOrNumber{
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

console.log(formatValue(10));

Intersection example:

type user = {
    name: string;
}
type admin = {
    canDeleteUser: boolean;
}

type Admin = user & admin;
