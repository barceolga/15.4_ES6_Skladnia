
// EXCERCISE 1 FROM 15.4

const greeting = "Hello";
const name = "World";

const helloWorld = (greeting = 'Hello', name = 'World') => {return`${greeting} ${name}!`}
helloWorld(greeting, name);


// EXCERCISE 2 FROM 15.4

const multiply = (a, b = 1) => {return a * b}
multiply(2,6);
multiply(6);
multiply(4);
multiply(4,8);


//EXCERCISE 3 FROM 15.4

const average = (...args) => {
  let total=0, average;
  args.forEach(arg => {
    total += arg;
  })
  average = total / args.length;
  return average;
};

average(2, 3, 5, 7);


//EXCERCISE 4 FROM 15.4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const [first, second, third, fourth, fith, sixth, seventh, eighth, nineth] = grades;

average(first, second, third, fourth, fith, sixth, seventh, eighth, nineth);


//EXCERCISE 5 FROM 15.4

const person = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = person;

const personNames = (person) => {
return firstname + " " + lastname;
};

personNames(person);
