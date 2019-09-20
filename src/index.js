import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import App from './App';
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

// const user = {
//   FirstName: 'John',
//   LastName: 'Doe'
// };

// function getGreeting(user){
//   if(user)
//     return 'Hello' + user.FirstName + ' ' + user.LastName
//   else
//     return 'Hello Stranger'
// }

// const element = getGreeting(user);

// import an image

// const element = <img src={logo} alt='test'></img>;


// example with children

// const element =
//   <div>
//     <p>Para 1</p>
//     <p>Para 2</p>
//     <p>Para 3</p>
//   </div>
// ;

// react create elements

// updating rendered elements

function tick() {
  const element = <h2>Hello {new Date().toLocaleTimeString() }</h2> ;
  ReactDOM.render(element, document.getElementById('root'));
}
tick();
setInterval(tick, 1);

serviceWorker.register();