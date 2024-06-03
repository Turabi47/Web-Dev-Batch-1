
// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // simulate a random success or error
//             const isSuccess = Math.random() < 0.7 // 70% chance of success
//             if (isSuccess){
//                 const data = {id:2, Name:"Jhon"};
//                 resolve(data);
//             }
//             else{reject('failed to fetch data. Please try again')};
//         },  2000);  // 2 second delay
//     });
// }

// //  Using the fetch data function

// fetchData()
//     .then((data)=>{
//         console.log("Data fetched successfully:", data);
        
//     })
//     .catch((error)=>{
//         console.error('Error:', error)
//     });

p = new Promise(function(resolve, reject) {
    if (1+1 == 2){
        resolve("They are equal");
    }else{
        reject("They are not equal");
    }
})
p.then((message) => {
    console.log(message);
},(message) => {
    console.log(message);
})
console.log(typeof(p))

