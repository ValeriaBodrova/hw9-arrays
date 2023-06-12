//task1

let str11 = prompt("Enter values more than 1 using coma");

let array11 = str11.split(",");

array11.sort(function(a, b){return a - b});

alert(array11);

array11.splice(1,3);
alert(array11);