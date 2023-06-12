//task1

let str11 = prompt("Enter values more than 1 using coma");

let array11 = str11.split(",");

array11.sort(function(a, b){return a - b});

alert(array11);

array11.splice(1,3);
alert(array11);

//task2

array22 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(array22)

let sum = 0;
let count = 0;


for ( let i = 0; i < array22.length; i++){
    if(array22[i] > 0){
        sum += array22[i];
        count++;
    }
}

console.log(sum);
console.log(count);

//task3


let minValue = Math.min.apply(null, array22);
console.log(minValue);

let index = array22.indexOf(minValue);
console.log(index);

//task4

let maxValue = Math.max.apply(null, array22);
console.log(maxValue);

let index41 = array22.indexOf(maxValue);
console.log(index41);

//task5


let countNegative = 0;


for ( let i = 0; i < array22.length; i++){
    if(array22[i] < 0){
        countNegative++;
    }
}

console.log(countNegative);