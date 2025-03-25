// Concatination and Interpolation
var price = 80
var itemName = "table"
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" //Concatination
var messageToPrint2 = `Then price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)
