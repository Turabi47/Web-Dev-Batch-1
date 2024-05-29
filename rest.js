// let A = [1, 2, 3];
// let B = [4, 5, 6];
// let C = [...A, ...B];
// console.log(C)

//  Calculate Average

function  calAve(...nums){
    let sum = nums.reduce((accumulator, currentValue) => accumulator+currentValue );
    let no = nums.length;
    return sum/no;
}
console.log(calAve(2,3,4,5,6,79));