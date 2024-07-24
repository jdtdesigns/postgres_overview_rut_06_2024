function printName(nameText) {
  const cap = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  console.log(cap(nameText));
}

// const printAge = age => console.log('age', age);

printName('bob');

// printAge(44);

// function doSomething() {
//   return 'some string';
// }

// console.log(doSomething());