let array1 = [1,3,4,2,34,45]
let array2 = ['zahid', 'saeed', 'shuaib', 'anjum']
array1.unshift()
console.log(array1)
// let stringlength = array1.length
// consoles.log(length)

let result = 34 - "dskfj"

//console.log(result)


//  
array2.forEach((element, index) => {
  //  console.log(x.toUpperCase())
    array2[index] = element.toUpperCase()
})
array2[2].toUpperCase()
console.log(array2)
let text = "dfkjsdkf";

console.log(text.toUpperCase())
// Print even numbers
array1.forEach(x => {
    if (x%2 == 0)
        console.log(x)

})

let Name_age = [
    {Name: "Zahid", age: 23},
    {Name: "Saeed", age: 25},
    {Name: "Zubair", age: 22}
]

Name_age.forEach(element => {
    console.log(element.Name,"is",element.age,"years old")
});
array2.forEach(element => {
    console.log(element[0] == 'S');
});