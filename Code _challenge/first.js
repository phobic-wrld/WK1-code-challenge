function number(marks) {
    if (marks >=79) {
        console.log("grade : A");
} else if (marks >= 60 && marks <= 79) {
    console.log("grade : B");
} else if (marks >= 50 && marks <= 59) {
    console.log("grade : C");
} else if (marks >=40 && marks <= 49) {
    console.log("grade : D");
} else {
console.log("grade : E");
}   

return 'You Entered:' + marks;
}
const myNumber = number(79);
console.log(myNumber);