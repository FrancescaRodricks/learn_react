// import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// const variable is JSX syntax used to define react elements
// const helloWorld = <h1>Hello World</h1>;

// const variable = 'hello'

// simple example 1
// const name = 'francesca rodricks';
// const element = <h1>hello { name }</h1>;

// example with any valid expression in the curly braces

// const mathOperation = 2+2 ;
// const element = <h1>{ mathOperation }</h1>

// example with a function
// const user = {
//   FirstName: 'Francesca',
//   LastName: 'Rodricks'
// }

// function fullName(user)
// {
//   return user.FirstName + ' ' + user.LastName
// }

// const element = fullName(user);

// jsx is an expression too

const user = {
  FirstName: 'John',
  LastName: 'Doe'
};

function getGreeting(user){
  if(user)
    return 'Hello' + user.FirstName + ' ' + user.LastName
  else
    return 'Hello Stranger'
}

const element = getGreeting(user);

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.register();