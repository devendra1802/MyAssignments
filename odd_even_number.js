var number = -50;

if (number == 0) {
    console.log("Number is Zero")
}
else if(number > 0 && number%2 ==0 ) {
    console.log("Given number is Even")
}
else if(number > 0 && number%2 !==0 ) {
    console.log("Given number is odd")
}
else if(number < 0 && number%2 ==0 ) {
    console.log("Given number is Negative Even")
}
else {
    console.log("Given number is Negative odd")
}


