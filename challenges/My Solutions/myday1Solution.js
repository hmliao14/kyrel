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

var initial_state = ['.', '.', '.', '.', '.'];

function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
  /* Problem 1
    start: ['.', '.', '.', '.', '.']
    finish: ['.', .', 'b', '.', '.']
  */
/*  k.moveRight();
  k.moveRight();
  k.draw();*/

  /* Problem 2
  start: ['b', 'b', 'b', 'b', 'b']
  finish: ['b', 'b', '.', 'b', 'b'] */
/*  k.moveRight();
  k.moveRight();
  k.erase();*/

  /* Problem 3
  start: ['b', 'b', 'b', 'b', 'b']
  finish: ['b', '.', 'b', '.', 'b'] */
/*  k.moveRight();
  k.erase();
  k.moveRight();
  k.moveRight();
  k.erase();*/

  /* Problem 4
  start: ['g', 'g', 'g', '.', '.']
  finish: ['g', 'b', 'g', 'b', '.'] */
/*  k.moveRight();
  k.draw();
  k.moveRight();
  k.moveRight();
  k.draw();*/

  /* Problem 5
  start: ['b', '.', '.', '.', '.']
  finish: ['.', '.', '.', '.', 'b']

  start: ['g', '.', '.', '.', '.']
  finish: ['.', '.', '.', '.', 'g']

  start: ['.', '.', '.', '.', '.']
  finish: ['.', '.', '.', '.', '.']
  */
  var flag;
  if(k.onBlue()) {
    flag = true;
  } else if (k.onGreen()) {
    flag = true;
    k.useGreen();
  }
  k.erase();
  k.moveRight();
  k.moveRight();
  k.moveRight();
  k.moveRight();
  if(flag) {
    k.draw();
  }


  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

} // <--- be careful not to delete or comment-out this closing bracket!
