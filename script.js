console.log("Javacript Active");

// map method

const numbers = [1, -1, 2, 44, 7, 6, -5];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => "<li>" + n + "</li>");

const html = items.join()

console.log(html)