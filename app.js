//write a function that, given a string, returns a reverse array

//I know im going to iterate through the string backwards
//i know i will have an option to splice that string, but may not have to
//i know i will need an empty array to push into
//test for that will be "racecarasaras"

let what = []
let word = "racecarasaras"
for (var i = word.length-1; i >= 0; i--) {
  what.push(word[i])
}

console.log(what);


//write a function that returns the Nth Fibonacci sequence

//what the Fibonacci sequence is
//0,1,1,2,3,5,8,13,21,34
//so given the -2X outputs, returns X output
//meaning that you have to create each iteration or refer to some DB of iteration.
//since I dont have a DB on the whiteboard, I am going to create a reference beging at 0
//I will create [-2]X + [-1]X = X => x+y=z
// x+y=z
// x+y=z
// x+y=z

//ha ha colot-imposter! who is the imposter now?
let x = 0
let y = 1
let z = ""
let n=10

for(let i = 0; i < n; i++) {
   z = x+y
   x = y
   y = z
  console.log('x', x);
  console.log('y', y);
  console.log('z', z);
}
