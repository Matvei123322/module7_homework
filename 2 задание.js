/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const checkProperty = (str, obj) => {
  return obj.hasOwnProperty(str);
}

const person = {
  name: 'Ivan',
  surname: 'Ivanov',
  job: 'developer'
};

console.log(checkProperty('name', person))
console.log(checkProperty('country', person))