//changing inputted odd number to even
let m = 10;
console.log(m)

function isOddOrEven(numberToCheck) {
  const isEven = numberToCheck % 2 == 0;
  
  if (isEven) 
    return console.log (`Great! The number ${numberToCheck} is even.`), nowEven = (numberToCheck);
  else
    nowEven = (numberToCheck + 1);
    console.log(`The number is now even -- ` + nowEven + `. Generated diamond shown below.`)
}

//creating the diamond with the function
isOddOrEven(m);
console.log(nowEven);

//first half of diamond
for(let x = 1; x <= nowEven; x++) {
  for (let space = (nowEven - x); space <= nowEven -x; space++){
    str = '  ';
    console.log(str.repeat(space), "m   ".repeat(x))
  }
}

//second half
for(let x = 1, y = (nowEven - x); x <= nowEven - 1; x++, y--) {
    str = '  ';
    console.log(str.repeat(x), "m   ".repeat(y))
}


