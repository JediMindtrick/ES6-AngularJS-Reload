//two ways to import from another library
import * as lib from 'clientOnly';
import { fizz } from 'clientOnly';
//import * as _ from 'lodash';

var foo = angular.module('foo',[]);

//'let' is cool
let robotA = { name: "Bender" };
//destructuring is cooler (and so is const)
const { name: nameA } = robotA;

console.log(nameA);
console.log(fizz);


var x = 1;
var y = 2;
//templates are cool
let template =
`<ol>
<li>${x}</li>
<li>${y}</li>
</ol>`;

console.log(template);

let generateBreaks = (howMany) => {
    var toReturn = '';
    for(var i = 0, l = howMany; i < l; i++){
        toReturn += `<td>${i}</td>`;
    }
    return toReturn;
};

let runTemplate = ({ first: x, second: y }) => {
    //or this
    //let runTemplate = (obj) => {
    //    const { first: x, second: y } = obj;
    let toReturn =
    `<ol>
    <li>${x}</li>
    <li>${generateBreaks(y + 2)}</li>
    </ol>`;
    return toReturn;
};

console.log(runTemplate({first: 3, second: 4}));
console.log(runTemplate({first: 5, second: 6}));
