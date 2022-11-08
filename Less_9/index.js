// const arr1 =[1,2,3,4,5];
// const arr2 =[];
// arr2.push

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// let i=0
// while (i<10) {
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }while(i<10);

// const arr = [1,3,4,5,-6,4,-7,98,9];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }
    
// }

// let array = [-2, 4, -10, 8,5,8,6,1,2,9];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     if(array[i] %2===0 ){
//         result += array[i];
//         console.log(result);
//     }
// }
// console.log(result);


// const arr =[1,3,5,9,11,12,15];
// for (let i = 0; i < arr.length; i++) {
//     if (i %3===0 )
//     console.log(arr[i]);
// }

// for (let i = arr.length -1; i >=0; i--) {
//     if (i %3===0 )
//     console.log(arr[i]);
// }


// let array = [-2,4,-10,5];
// let result = 0;
//  for (let i = 0; i < array.length; i++){
//     if(array[i] >0) result += array[i];
//     result += array[i];
//  }

//  const array = [0,2,2,3,4,5,7,8,8]
//  result = 0;
//  for (let i = 0; i < array.length; i++){
//     if (array[i] === i)
//     result += array[i];
//     console.log(result);
//  }

let array = [-2, 4, -10, 8,5,8,6,1,2,9];
let result = 0 ;
let result2 = 0;
let result3 =0;
for (let i = 0; i < array.length; i++) {
    if(array[i] %2===0 ){
        result += array[i];
    }else if (array[i] %2!=0)
    {
        result2 += array[i];
    }
}
    if(result>result2){
        result3= result-result2 
    }else{
        result3= result2-result 
    }
console.log(result);
console.log(result2);
console.log(result3);
