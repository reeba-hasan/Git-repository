const num = Math.ceil(Math.random() * 10);
console.log(num);
const guessNumber = prompt ("Guess the number between 1 to 10");
if (guessNumber == num) {
    console.log('Matched')
} else {
    console.log('Not Matched');
}