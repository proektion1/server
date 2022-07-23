'use strict';
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // превратит ответ JSON в JS объект
  // она возвращает промис
  .then(json => console.log(json));


