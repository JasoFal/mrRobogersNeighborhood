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