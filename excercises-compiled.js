"use strict";

// EXCERCISE 1 FROM 15.4

var greeting = "Hello";
var name = "World";

var helloWorld = function helloWorld() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
  return greeting + " " + name + "!";
};
helloWorld(greeting, name);

// EXCERCISE 2 FROM 15.4

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
multiply(2, 6);
multiply(6);
multiply(4);
multiply(4, 8);

//EXCERCISE 3 FROM 15.4

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var total = 0,
      average = void 0;
  args.forEach(function (arg) {
    total += arg;
  });
  average = total / args.length;
  return average;
};

average(2, 3, 5, 7);

//EXCERCISE 4 FROM 15.4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var first = grades[0],
    second = grades[1],
    third = grades[2],
    fourth = grades[3],
    fith = grades[4],
    sixth = grades[5],
    seventh = grades[6],
    eighth = grades[7],
    nineth = grades[8];


average(first, second, third, fourth, fith, sixth, seventh, eighth, nineth);

//EXCERCISE 5 FROM 15.4

var person = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = person[2],
    lastname = person[4];


var personNames = function personNames(person) {
  return firstname + " " + lastname;
};

personNames(person);
