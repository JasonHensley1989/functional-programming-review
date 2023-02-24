console.log("Javacript Active");

// map method

const numbers = [1, -1, 2, 44, 7, 6, -5];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
    return { value: n };   
})

console.log(items)