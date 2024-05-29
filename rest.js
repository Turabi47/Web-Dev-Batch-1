//  Calculate Average

function  calAve(...nums){
    let sum = nums.reduce((accumulator, currentValue) => accumulator+currentValue );
    let no = nums.length;
    return sum/no;
}
console.log(calAve(2,3,4,5,6,79));

//  Concatinate Strings
function concate(...strings){
    return strings.join(' ')
}
console.log(concate('hello,', 'world', '!'));

//  Find Maximun
function findMax(...nums){
    let i =0; 
    let j=0;
    while(i<nums.length){
        if(j<nums[i]){
            j = nums[i]
        } 
        i++;       
    }
    return j;
}
console.log("Maximum value:",findMax(23,5,2,234,5,2,23,4,23,));

//  Merge Objects
function mergeObject(...obj){
    return Object.assign(...obj)
}
obj1 = {
    a : 10,
    b : 20
}
obj2 = {
    c : 100,
    d : 200
}
console.log("Merged object is:", mergeObject(obj1,obj2))

//  Filter Unique Values

function filterUnique(...nums){
    return new Set(nums)
}
console.log(filterUnique(2,2,2,4,2,3,5,6,7))
