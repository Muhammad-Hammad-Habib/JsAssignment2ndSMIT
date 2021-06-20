// // chapter 26 to 30

// // Q1

// var num = -3.432;

// document.write("<br> Number " ,num)
// document.write("<br> round of value " , Math.round(num))
// document.write("<br> Number " , Math.floor(num))
// document.write("<br> Number " , Math.ceil(num))

// // Q2

// var num2 = -2.332;

// document.write("<br> Number " ,num2)
// document.write("<br> round of value " , Math.round(num2))
// document.write("<br> Number " , Math.floor(num2))
// document.write("<br> Number " , Math.ceil(num2))

// // Q3


// var absolute = -8;
// document.write("<br> absolute number of this " , absolute ,  " is " , Math.abs(absolute))



// Q4

var ranValue = Math.random()
document.write("random dice value is : ", Math.ceil(ranValue * 6))


// Q5
var ran = Math.random()
if (Math.ceil((ran * 2)) == 1) {
    document.write("<br> random coin value is : head  ", (Math.ceil((ran * 2))))
}
else if (Math.ceil((ran * 2)) == 2) {
    document.write("<br> random coin value is : tail  ", (Math.ceil((ran * 2))))
}


// Q6
var hundred = Math.random()
document.write("<br>Random number between 1 to 100 is : ", Math.ceil(hundred * 100))




// Q7














// Q8


var secret = Math.ceil(Math.random() * 10)
var guess = +prompt("Enter the number 1 tp 10 :", 0)
if (secret == guess){
    document.write("<br>Congratualtions you  win ")
}
else{
    document.write("<br>Sorry you loss ")

}   

// console.log("<br>"secrrt)