// Loops

for (i=0; i<5; i++) { // i=i+1 IS THE SAME AS i++
    console.log('Hello world! ' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
for(let car of cars){
    console.log(car)
    if (car == "Toyota") {
        break
    }
}

// ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
