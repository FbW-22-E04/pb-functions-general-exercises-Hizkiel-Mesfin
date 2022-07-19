//#1
function threeTimes(three) {
  for (let i = 0; i < 3; i++) {
    console.log(three);
  }
}

threeTimes("this is going to print three times");

//#2
function wordRepeater(fiveTimes) {
  let repeatedWord = "";

  for (let i = 0; i < 5; i++) {
    repeatedWord += fiveTimes;
  }

  return repeatedWord;
}

console.log(wordRepeater("lion "));

//#3

function wordRepeater2(number, string) {
  let repeatedWord = "";
  for (let i = 0; i < number; i++) {
    repeatedWord += string;
  }

  return repeatedWord;
}

console.log(wordRepeater2(9, "well "));

//#4

function maxArrayvalue(array) {
  console.log(Math.max(...array));
}

maxArrayvalue([1, 6, 83, 91, 0, -4, 1337, 5]);

//#5
//part a

function evenlyDivisibleByTen(num) {
  if (num % 10 === 0) {
    console.log("Even 10!");
  }
}

evenlyDivisibleByTen(320);

// part b

for (let i = 0; i < 125; i++) {
  evenlyDivisibleByTen(i);
}

//#6

const largeNumber = (n1, n2, n3, n4, n5) => {
  return Math.max(n1, n2, n3, n4, n5);
};

console.log(largeNumber(1, 2, 333, 49, 5));

//#7

const ifStr = (someThing) => {
  if (typeof someThing === "string") {
    return true;
  }
};

console.log("Q7:", ifStr("kjdshf"));

//#8

const ifBothStr = (value1, value2) => {
  if (typeof value1 === "string" && typeof value2 === "string") {
    return true;
  }
};

console.log("Q8:", ifBothStr("sfasf", 54));

//#9

const getFirstWord = (someStr) => {
  let word = "";

  for (let i = 0; i < someStr.length; i++) {
    if (someStr[i] === " ") {
      break;
    }
    word += someStr[i];
  }

  return word;
};

console.log(getFirstWord("Word cutter will cut the first word"));

//#10
console.log("================================");

const wordRepeater3 = (someStr) => {
  let wordArr = someStr.split(" ");
  let finalWords = "";

  const wordCounter = someStr.split(" ").length - 1;git add .Array

  for (let i = 0; i < wordCounter; i++) {
    for (let j = 0; j < wordCounter; j++) {
      finalWords += wordArr[i] + " ";
    }
  }

  return finalWords;
};

console.log(wordRepeater3("This was not easy sdf"));

//#11

const firstLetter = (someStr) => {
  console.log(someStr[0]);
};

firstLetter("scat");

//#12

const firstLetters = (someStr) => {
  const wordArr = someStr.split(" ");

  const finalLetters = [];

  for (let i = 0; i < wordArr.length; i++) {
    const word = wordArr[i];
    for (let j = 0; j === 0; j++) {
      finalLetters.push(word[0]);
    }
  }

  return finalLetters.join("");
};

console.log(firstLetters("we wow wow are the world"));

//#13

const variable = [1, 2, 3, 4, 3, 3];

const testIf = (variable) => {
  if (typeof variable === "string") {
    return variable.length;
  } else if (Array.isArray(variable) === true) {
    return variable.length;
  } else {
    return null;
  }
};

console.log(testIf(variable));

//#14

const variable2 = "cat";
const explode = (variable) => {
  if (typeof variable !== "string") {
    return null;
  } else if (typeof variable === "string") {
    return variable.split("");
  }
};

console.log(explode(variable2));

//#15

const includesO = (someStr) => {
  const arrOfSomeStr = someStr.split("");

  if (arrOfSomeStr.includes("o")) {
    return true;
  } else {
    return false;
  }
};

console.log(includesO("aoray"));

//#16

const cat = (someStr) => {
  let newStr = "";
  const deleteFirstTwo = someStr.split("").splice(2, someStr.length).join("");

  newStr += "Cat" + deleteFirstTwo;

  return newStr;
};

console.log(cat("tomato"));
