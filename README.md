# _Mr.Roboger's Neighborhood_

#### By _**Jason Falk**_

#### _The Fidgetech independent project for arrays and looping._

## Technologies Used

* _Javascript_
* _HTML_
* _Bootstrap_
* _Git/Git Bash_

## Description

_A Fidgetech project created in order to prove sufficient knowledge of arrays and looping. When the user inputs a number the application returns a range of 1 to the user inputted number. The following rules are then applied to specific variables._

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Setup/Installation Requirements

1. _In Git Bash type git clone https://github.com/JasoFal/mrRobogersNeighborhood.git_
2. _Either use Git Bash to reach the top level of the directory or open file explorer and find the directory._
3. _Open index.html in the browser of your choice using one of the following methods._
------
* _Use command start index.html if in Git Bash._
* _In file explorer click on index.html._
------
* Alternatively visit this *[link](https://jasofal.github.io/mrRobogersNeighborhood/)*

## Known Bugs

* _The application stress limit is 5337574._

## License

_MIT_

Copyright (c) _4/20/23_ _Jason Falk_

<!-- Tests -->
-----------------------------------------

Describe: rangeOfNumbers()

Test: "It should return an array with a range of numbers based on number input"
Code: rangeOfNumbers(5);
Expected Output: [1, 2, 3, 4, 5];

Describe beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: [ 0 ]

Test: "If a number within rangeOfNumbers contains a 1 replace all digits with 'Beep'"
Code: beepBoop(1);
Expected Output: [ "Beep!" ]

Test: "If a number within rangeOfNumbers contains a 2 replace all digits with 'Boop!'"
Code: beepBoop(2);
Expected Output: [ "Boop!" ]

Test: "If a number within rangeOfNumbers contains a 3 replace all digits with 'Won't you be my neighbor?'"
Code: beepBoop(3);
Expected Output: [ "Won't you be my neighbor?" ];

Test: "It should apply the previous tests in order of 3, 2, 1"
Code: beepBoop(13);
Expected Output: [ "Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?" ]