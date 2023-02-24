console.log("Javacript Active");

// map method

const numbers = [11, -1, 2, 44, 7, 6, -5];

// method chaining
const filtered = numbers.filter(n => n >= 0)
.map(n => ({ value: n }))
.filter(obj => obj.value  < 40)
.map(obj => obj.value + "a")

 console.log(filtered)