async function fun(){
    return 1;
}

console.log(fun());
function fun1(){
    return Promise.resolve(1);
}

console.log(fun1());

fun().then(val => console.log(val));