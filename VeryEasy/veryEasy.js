/*VERY EASY: Write a function named min that takes 
two arguments and returns their minimum.*/


function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(13, 31));
// 31
console.log(min(47, 24));
// 24