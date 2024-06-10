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

//      Assignment No. 3

let arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]
const arr3 = [1, 2, 3, 4, 5]

Object.freeze(arr2)
// arr2.push(6)        // These two lines give an error because the array is immutable
// arr2.pop()
arr2[0] = 11
console.log(arr2)

Object.seal(arr3)
// arr3.push(6)        This does not work
// arr3.pop()
arr3[0] = 11        // But this works
console.log(arr3)



