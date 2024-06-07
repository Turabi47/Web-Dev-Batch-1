
// console.log(a);
// console.log(b);
// // console.log(c);

// a = 15;
// b = 16;
// c = 17;
// console.log(a);
// console.log(b);
// console.log(c);

const  obj = { 
    a : 5, 
    b : 6, 
    c : 7
}
// Object.freeze(obj)
Object.seal(obj)
obj.a = 48375; // This will change the value


console.log(obj.a)

delete obj.a;       // seal does not allow to delete any key
console.log(obj)

obj.d = 786;          // Neither seal allows to add any dey
console.log(obj)