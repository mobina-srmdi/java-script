const randomNumbers = [53, 16, 65, 100, 64, 83, 41, 98, 16, 93];

for (let i = randomNumbers.length - 1; i >= 0; i--) {
  randomNumbers.push(randomNumbers[i]);
}

console.log(randomNumbers);
