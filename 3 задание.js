/*Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.*/

const createEmptyObject = () => {
  return Object.create(null);
}

const obj = createEmptyObject();
console.log(obj);
console.log(obj.toString())