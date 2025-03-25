// Objects
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

// Dot notation
console.log(customer.firstName) 

// Bracket notation
console.log(customer['lastName']) 

// Concatenation
console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[0] = "BMW" 
console.log(car[0])

console.log(customer.cars[0])
