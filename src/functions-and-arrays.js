// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0; // 🔥 Aquí el cambio
  }

  let sum = 0;

  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }

  let average = sum / numbers2.length;

  return average;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words, searchWord) {
  // Si el array está vacío → debe devolver null
  if (words.length === 0) {
    return null;
  }

  // Recorrer el array para buscar la palabra
  for (let i = 0; i < words.length; i++) {
    if (words[i] === searchWord) {
      return true; // La palabra existe
    }
  }

  // Si no la encontró en todo el array → false
  return false;
}
