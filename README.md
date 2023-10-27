TDD Testing
-----------
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace single digit numbers that contain a "1" with "Beep"
Code: findReplace(testArray, 1, "Beep")
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: assessDigit(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(5)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5]
--
Test: "It should search a double digit number if contains 1,2,or 3 and replace appropriately"
Code: beepBoop(10)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"....(10:"Beep")]

Test: "It should prioritize "3" response over "1" in double digit-numbers"
Code: beepBoop(13)
Expected Output: [0, "Beep", "Boop"...value13: "Won't you be my neighbor?"]

Test: "It should follow hierarchy of substitutions"
Code: beepBoop(23)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"....(value23:) "Won't you be my neighbor?"]

Test: "It should report an error if non-number is entered"
Code: beepBoop("hello")
Expected Output: "Not a number, try again"

