# Javascript learning notes

Write code in external .js file  
```
<script src="main.js"></script>
```

## Outputs

alert('Hello world') creates a pop up   

console.log('Hello world') prints to the terminal  


## Variables 
let: variables can be reassigned values   
const: variables fixed and cant be reassigned values  
always use const to define variables unless you know you are going to need to reassign the variable a value (secure and robust code less prone to error)   
```
let age =30
age =31
console.log(age)

const name = 'apple'
name = 'banana'         # this results in a TypeError: Assignment to constant variable.
console.log(name)

```

## Comments 
// single line  

/* multiline
*/




## primitive Data types 
strings, numbers, boolean, null, undefined, symbol   

```
const name = 'John';
const age = 30;
const isCool = true; // booleans have to be lower case 
const x = null;
const y = undefined;
let z;

console.log(typeof name); //string
console.log(typeof age); // number
console.log(typeof isCool); //bool
console.log(typeof x); //object but is actually null
console.log(typeof y); //undefined
console.log(typeof z); //undefined
```

## String operations 
concatenation  
formatting using backticks (equivalent to python f string)
```
console.log(`My name is ${name} and I am ${age} years old.`)    //My name is John and I am 30 years old.
```
String properties: doesnt have ()  eg string.length
String methods: has () eg string.toUpperCase()


## Arrays 
created using an array constructor (new keyword is a constructor) or square brackets   
```
const numbers = new Array(1,2,3,4,5);
console.log(numbers)

```
Javascript arrays --> same as python lists  

array methods   
append --> .push()  add item to end  
insert --> .unshift()  add item to the beginning   
pop ---> pop()
isArray() returns true if its an array   
indexOf() returns index of the item   


## Object literals  
Similar to python dictionary  (key-value pairs)   
```
const person = {
    'name': 'john',
    'age': 30,
    'hobbies': ['soccer', 'gaming'],
    'address': {
        'number': 21,
        'street': 'Honeywell',
        'city': 'GeorgeTown'
    }
}

console.log(person); // {name: "john", age: 30, hobbies: Array(2), address: {…}}
//address: {number: 21, street: "Honeywell", city: "GeorgeTown"}
//age: 30
//hobbies: (2) ["soccer", "gaming"]
//name: "john"

console.log(person.hobbies[0]);
console.log(person.address.city);

// pull items out as variables 
const {name, age} = person;
const {address:{city}, address: {street}} = person;
console.log(name, age, city, street)    //john 30 GeorgeTown Honeywell
```

## An array of objects   
An array of objects (ie list of dictionaries)
```
const todo = [
    {id: 1,
    text: 'Take out trash',
    isComplete: false,
},
{id: 2,
    text: 'Javascript Code',
    isComplete: false,
},

]

console.log(todo);

const {text} = todo[0];
console.log(text);  //Take out trash
```

To convert an array of objects to json:   
JSON requires double quotes around keys and values otherwise you get an error  
```
const todoJSON = JSON.stringify(todo)
console.log(todoJSON)
//[{"id":1,"text":"Take out trash","isComplete":false},{"id":2,"text":"Javascript Code","isComplete":false}]
```

## For loops 
```
for(let i = 0; i < 10; i++){
    console.log(i);

}
```
for loop stops when the 2nd argument is no longer true   

## While
```
// while
let i=0;
while(i<10){
    console.log(i);
    i++;
}
```

## Looping through arrays (for of loop)
```
for(let task of todo ){
    console.log(task.text)
}
```

## High order array methods: forEach, map, filter
```
// forEach
todo.forEach(function(task){
    console.log(task);
});

//{id: 1, text: "Take out trash", isComplete: false}
//{id: 2, text: "Javascript Code", isComplete: false}

// map
// map returns an array
const todoText = todo.map(function(task){
    return task.text;
});
console.log(todoText);
//) ["Take out trash", "Javascript Code"]

// filter
// returns an array of objects
const todoText2 = todo.filter(function(task){
    return task.isComplete=== false;
});
console.log(todoText2);
// [{…}, {…}]
//0: {id: 1, text: "Take out trash", isComplete: false}
//1: {id: 2, text: "Javascript Code", isComplete: false}
//length: 2

// text of the tasks that arent completed
//combo of map and filter
const todoText3 = todo.filter(function(task){
    return task.isComplete=== false;
}).map(function(task){
    return task.text;
});
console.log(todoText3);
// ["Take out trash", "Javascript Code"]
```


## Conditionals
Basic syntax
```
if(conditon){
    code to run
} else if(condtion){
    code to run
} else{
    code to run
}
```

```
const x =10;
const y = '10';
if(x==10){
    console.log('X is 10')
}

if(y==10){
    console.log('Y is 10')
}
if(x===10){
    console.log('X is 10')
}

if(y===10){
    console.log('Y is 10')
} else{
    console.log('Y is not 10')
}
// X is 10
// Y is 10
// X is 10
// Y is not 10
// double equal matches the value, not the data type. tripple equal matches the data type
```

## Complex conditonals
OR ||
AND &&
```
const x =10;
const y = 6;
if(x===8 || y>5){
    console.log('Abra cadabra')
}else{
    console.log('bla blba')
}
// bla bla

if(x>5 && y>5){
    console.log('beeb beeb')
}else{
    console.log('pop')
}
//beeb beeb

```


## Functions
```
function addNums(x, y){
    console.log(x+y);
    return x+y;
}
// calling the function
addNums(5,4);

function addNums(x=3, y=3){
    console.log(x+y)
}
// using default values
addNums();

```

## Arrow functions 
instead of using `function` variable you name the function as a variable and assign it to a bracket containing expected arguments, then the fact arrow
```
const addNums = (x, y) =>{
    return x + y;
}
```

## Turnary operator (?). Represents "then"; (:) represents "else"
-used to assign variables a value based on a condition  

```

const x=9;
// if x is greater than 10 then color will be assigned the value red else it will be assigned the value blue
const color = x>10 ? 'red' : 'blue';

console.log(color)
```



## Testing
-JEST   
-install nodejs (nodejs.org)   
-`npm init -y `   creates a package.json file   
-install jest `npm i --save-dev jest`   
-in packages.json, change the value of scripts to jest:   
```
  "scripts": {
    "test": "jest"
  },
```
this means that when you run the command `npm test` it is going to run jest and run all the tests   
-create test file. if the module you want to test is called main.js then the test file should be called `main.spc.js`   
-export the function you want to test    `module.exports = accountTypeChecker`   
-import the function in the test module   






