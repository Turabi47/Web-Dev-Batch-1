//      Assignment No. 1

let a = 10;
var b = 10;
const c = 10;
console.log("The old value of variable declared by 'let':",a)
console.log("The old value of variable declared by 'var':",b)
console.log("The old value of variable declared by 'const':",c)
a++;
b++;
// c++;            //it will give error until we comment this line. This means const variables does not change
console.log("The new value of variable declared by 'let':",a)
console.log("The new value of variable declared by 'var':",b)
console.log("The new value of variable declared by 'const':",c)



//      Assignment No. 2

let obj1 = {
    key1 : "value1", 
    key2 : "value2", 
    key3 : "value3" 
}
const obj2 = {
    key1 : "value1", 
    key2 : "value2", 
    key3 : "value3" 
}
const obj3 = {
    key1 : "value1", 
    key2 : "value2", 
    key3 : "value3"
}

Object.freeze(obj2);        // This makes the object unchangeable
obj2.key1 = "Changed";
console.log(obj2);
obj2.key4 = "value4";
obj2.key2 = delete
console.log(obj2);


Object.seal(obj3);          // This makes object not add or delete any pair
obj3.key1 = "Changed";
console.log(obj3);
obj3.key4 = "value4";
obj3.key2 = delete
console.log(obj3);




