TDD Testing
-----------
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Describe: findReplace()

Test: "It should find a specific value in an array and replace it with another value"
Code: findReplace([0,1], 1, "Beep!") 
Expected Output: [0, "Beep!"]

Describe: assessDigit()

Test: "It should replace single digit numbers that contain a "1" with "Beep"
Code: assessDigit([0, 1])
Expected Output: [0, "Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: assessDigit([0, 1, 2])
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: assessDigit(5)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5]

Test: "It should replace 1,2,3 for the new values over 9"
Code: assessDigit([0, 1, 2, ... 13, 14])
Expected Output: [0, "Beep", "Boop"..."Won't you be my neighbor?", "Beep"]

Describe: singledDigit()

Test: "It should search a double digit number if it contains 1, 2, or 3 and replace as single digit"
Code: singledDigit([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]

Test: "It should prioritize "3" response over "1" in double digit-numbers"
Code: singledDigit ([0, 1, 2, ... 13, 14])
Expected Output: [0, "Beep", "Boop"..."Won't you be my neighbor?", "Beep"] 