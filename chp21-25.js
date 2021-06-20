// chapter 21 to 25

// Q1

var frtName = prompt("Enter the first name " , " ")
var lstName = prompt("enter the last name : " , " ")
var fullName = frtName + " " + lstName
document.write(fullName)




// Q2
var inpLen = prompt("Enter the your faviorte mobile name with sereies :" ," ")
document.write("<br> My favorte mobile is : " , inpLen)
document.write("<br> lenght of string is : " , inpLen.length)


// Q3

var index = "pakistani"
document.write("<br> String " , index)
document.write("<br>Index of 'n' is " , index.indexOf("n"))



// Q4
index = "Hello world"
document.write("<br> String " , index)
document.write("<br>Index of 'l' is " , index.lastIndexOf("l"))



// Q5

index = "pakisani"
document.write("<br> String " , index)
document.write("<br>Character of index at 3 is : " , index.charAt(3))



// Q6

fullName = frtName.concat(lstName)
document.write("<br>",fullName)


// Q7

var city = "hyderabad"
document.write("<br>", city.replace("hydera","Islama"))

// Q8

var message = "Ali and Sami are best friends. They play cricket and football together";
document.write("<br>", message.replace(/and/g,"&"))

// Q9

index = 472;
document.write("<br>Value is : " , index)
document.write("<br>type is : " , typeof(index))

index = String(index);
document.write("<br>Value is : " , index)
document.write("<br>type is : " , typeof(index))


// Q10

var exp = prompt("enter Your message to convert in the capital letter")
document.write("<br> Input is :" , exp)
document.write("<br> Input is :" , exp.toUpperCase())

// Q11
exp = prompt("enter Your tittle")
document.write("<br> Input is :" , exp)
document.write("<br> Tittle is :" , exp[0].toUpperCase(),exp.slice(1).toLocaleLowerCase())


// Q12
exp = 36.39;
document.write("<br>Number : ",exp)
document.write("<br>result : ", (String(exp)).replace(".",""))



// Q13


var nameUser = prompt("Enter the usre name ")
if (nameUser.match(/[! , . @]/g)) {
    document.write(" enter a valid username")
}
else {
    document.write("correct ")
}







// Q14  

var shop = ["cake", "apple pie", "cookie", "chips", "patties"]

var search = prompt("Enter the component for search", "non")

for (var i = 0; i < shop.length; i++) {
        if (search.toLowerCase() == shop[i]) {
            document.write("<br>", shop[i], " is  avaiable at index ", i, " in our bakery")
            break
        }
        else if ((i == shop.length - 1) && (search.toLowerCase() != shop[i])){
            console.log("Heelo")
        }
}


// Q15


var pass = prompt("Enter the password ")

if (pass[0].match(/[0-9]/g)) {
    console.log("password should not be started with the number ", pass)
}

else if (pass[0].match(/[a-z]/g) || pass[0].match(/[A-Z]/g)) {
    if (pass.match(/(\d+)/) && pass.length >= 6){
        console.log(" valid ", pass)
    }
    else{
    console.log("password should has atleast one number ", pass)
    }
}






// Q16


var uni = "University of Karachi"
for(var i = 0 ; i <uni.length ; i++){
    document.write(uni[i] , "<br>")
}




// Q17

var last  = prompt("Enter to the character at last  index")

document.write("last charater of input , " , last.charAt(last.length-1))
