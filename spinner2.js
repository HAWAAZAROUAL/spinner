//Spinner 2
let symbols = ["|", "\r/", "\r-", "\r|", "\r\\", "\n"];
//console.log(symbols);
let iterator = 1;
let symbolLoop = symbols.forEach((element) => {
  setTimeout(() => {
    process.stdout.write(element);
  }, iterator++ * 300);
});



//+ ('\r ') - brings the element back to the beginning.
//+ ('\n')- get rid of the percent.

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r-   ') ;
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r\   ' + '\n');
// }, 1100);
