// JS vs TS -> Strict typing -> prevents mistakes

// ts assigns types to variables
var customerFirstName : string = "John"
var customerlastName: string = "Smith"
var  customerAge : number = 25

// ts prevent changing types of variables:
// customerFirstName = 100

// Custom data type
type Customer = { firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}