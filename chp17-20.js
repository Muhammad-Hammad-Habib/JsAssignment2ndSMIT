// Chapter 17 to  20

// Q1

var array2 = new Array()


// Q2

for (var i = 0; i < 3; i++) {
    array2[i] = [];
}

for (var j = 0; j < 3 ; j++) {
    for (var a = 0; a < 4; a++) {

        array2[j][a] = prompt("inter the number")
        console.log(j + " " + a)
    }

}
console.table(array2)


//Q3

for (var i = 1; i <= 10; i++) {
    console.log(i)
}

// Q4
var table = +prompt("enter the table number ", 0)
var tableL = +prompt("Enter the  table lenght ", 0)

for (var i = 1; i <= tableL; i++) {
    document.write("<br>", table, " x ", i, " = ", table * i)
}



// Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write("<br>", fruits[i])
}

for (var j = 0; j < fruits.length; j++) {
    document.write("<br> Element at index ", j, " ", fruits[j])
}


// Q6

document.write("<br>Counting :")
for (var i = 1; i <= 15; i++) {
    document.write(" ", i, ", ")
}

document.write("<br>Reverse counting :")
for (var i = 15; i > 0; i--) {
    document.write(" ", i, ", ")
}

document.write("<br>Even Number :")
for (var i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        document.write(" ", i, ", ")
    }
}

document.write("<br>odd Number :")
for (var i = 0; i < 15; i++) {
    if (i % 2 != 0) {
        document.write(" ", i, ", ")
    }
}

document.write("<br>series  Number :")
for (var i = 2; i < 15; i = i + 2) {
    document.write(" ", i, "k, ")
}


// Q7 

var shop = ["cake", "apple pie", "cookie", "chips", "patties"]

var search = prompt("Enter the component for search", "non")

for (var i = 0; i < shop.length; i++) {
    if (search == shop[i]) {
        document.write("<br>", shop[i], "is  avaiable at index ", i, " in our bakery")
    }
}
document.write("<br>", search, "is not  avaiable in our bakery")


// Q8

var large = [24, 53, 78, 91, 12, 100]
var temp = large[0];

for (var i = 0; i < large.length; i++) {
    if (large[i] > temp) {
        temp = large[i]
    }
}
document.write("<br> Array  items  :", large)
document.write("<br> the largest in them is :", temp)



// Q9

var smale = [24, 53, 78, 1, 91, 12, 100]
var tempS = smale[0];

for (var i = 0; i < smale.length; i++) {
    if (smale[i] < tempS) {
        tempS = smale[i]
    }
}
document.write("<br> Array  items  :", smale)
document.write("<br> the largest in them is :", tempS)



// Q10

for (var i = 0; i <= 100; i = i + 5) {
    document.write(i, ", ")
}