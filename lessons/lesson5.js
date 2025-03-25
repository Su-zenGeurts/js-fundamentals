// Logical operator "AND"
console.log(true && true) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // any value should be TRUE for the expression to be TRUE

// Logical "NOT" 
console.log(!true) // value has to be FALSE for the expression to be TRUE


// EXAMPLE
var agelsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriversLicense = agelsMoreThanEighteen &&  isUSCitizen
console. log( 'This cusomer is eligible for DL: ' + eligibilityForDriversLicense)

var eligibilityForDriversLicense = agelsMoreThanEighteen || isUSCitizen
console. log( 'This cusomer is eligible for DL: ' + eligibilityForDriversLicense)