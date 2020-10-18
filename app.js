const os = require('os');
const fs = require('fs');

const gender = ['male', 'female'];
const maleNames = ['Piotr', 'Adam', 'Tomasz', 'Krzysiek', 'Michał'];
const femaleNames = ['Ania', 'Magda', 'Hanna', 'Halina', 'Zuzanna'];
const lastName = ['Kowalski', 'Pietrucha', 'Lis', 'Kaczor', 'Kot'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for(let i = 0; i < 20; i++){
  const user = {
    gender: randChoice(gender),
  };

  if(user.gender === 'male'){
    user.firstName = randChoice(maleNames);
  }else{
    user.firstName = randChoice(femaleNames);
  };

  user.lastName = randChoice(lastName);

  user.age = Math.floor(Math.random() * ( 78 - 18)) + 18;

  people.push(user)
}

const users = JSON.stringify({people: people});

fs.writeFile('people.json', users, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});