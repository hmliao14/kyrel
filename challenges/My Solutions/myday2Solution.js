/*
  INSTRUCTIONS
    - Write all of your code inside the "main" function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - make a copy of this file and name it e.g. 'solution-all-blue.js'
        - then clean out play.js so you can start fresh on a new challenge.

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

var initial_state = ['b', 'b', 'b', 'b', 'b'];

function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
  /* Problem 1
    start: ['.', '.', '.', '.', '.']
    finish: ['b', 'b', 'b', 'b', 'b'] */
/*  for(let i=0; i<5; i++) {
    k.draw();
    k.moveRight();
  }*/

  /*Problem 2
  start: ['b', '.', '.', '.', '.']
  finish: ['b', 'b', 'b', 'b', 'b'] 
  start: ['g', '.', '.', '.', '.']
  finish: ['g', 'g', 'g', 'g', 'g']
  */
/*  if(k.onBlue()){k.useBlue();}
  if(k.onGreen()){k.useGreen()};
  for(let j=0; j<4; j++){
    k.moveRight();
    k.draw();
  }*/

  /*Problem 3
  start: ['.', '.', '.', '.', '.']
  finish: ['b', 'b', '.', '.', '.'] (given n is 2)
  finish: ['b', 'b', 'b', '.', '.'] (given n is 3)
  */
/*  let n = 3;
  for(let i =0; i<5; i++){
    if(n>0){
      k.draw();
    }
    k.moveRight();
    n--;
  }*/

  /*Problem 4
  start: ['b', 'b', 'b', 'b', 'b']
  finish: ['.', 'b', '.', 'b', '.'] */
/*  for(let i =0; i<5; i++){
    if(i%2 === 0){
      k.erase();
    }
    k.moveRight();
  }*/

  /*Problem 5
  start: ['b', 'b', 'b', 'b', 'b']
  finish: ['b', '.', 'b', '.', 'b'] */
/*  for(let i =0; i<5; i++){
    if(i%2 !== 0){
      k.erase();
    }
    k.moveRight();
  }*/

  /*Problem 6
  start: ['b', 'b', 'b', 'b', 'b']
  finish: ['.', '.', '.', '.', '.'] // (given n is 1)
  finish: ['b', '.', 'b', '.', 'b'] // (given n is 2)
  finish: ['b', 'b', 'b', 'b', '.'] // (given n is 5) */
  let n = 1;

  for(let i =0; i <5; i++) {
    if(n ===1) {
      k.erase();
    } else if(n%2 === 0) {
      // if its even
      if(i !== n) {
        k.erase();
      }
    } else if(n%2 !== 0) {
      // if its odd
      if(i+1===n){
        k.erase()
      }
    }
    k.moveRight();
  }

  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

} // <--- be careful not to delete or comment-out this closing bracket!
