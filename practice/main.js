// Filter
const arr = [34, 219, 109, 2934, 12, 10, 29];

//FILTER (I PRZYPOMNIENIE MAP)

//odd - parzyste
const oddNumbers = arr.filter(number => number % 2);
//even - nie parzyste
const evenNumbers = arr.filter(number => !(number % 2));

const NumbersBiggestThen100 = arr.filter(number => number > 100);

//MAP
const double = arr.map(number => number * n);

const people = arr.map(number => number + " osób");

//forEach
arr.forEach((number, index) => number[index] * 2);

//SEARCH