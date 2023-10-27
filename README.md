# Mr. Roboger's Neighborhood

#### By Kim Robinson

#### For Epicodus Code Review 3: Arrays & Looping

##### A web application that takes a number from the user and returns a list of values from 0 to the input number with substitutions for any number containing 1, 2, or 3.

## Technologies Used

* Html
* CSS
* Javascript

## Description

_Project Prompt_

Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

    For numbers that contain a 1, all digits are replaced with "Beep!"
        For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
    For numbers that contain a 2, all digits are replaced with "Boop!"
        For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
    For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
        For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

Additionally, you will need to:

    Solve this prompt using at least one loop, at least one array, and branching logic.
    Design the application so that a user is able to enter a new number and see new results over and over again.
    Remember that you need to return a list of values from 0 to the user's inputter number. This means printing each element in the list to the webpage. Check out the section below that shows example inputs and outputs. You can use whatever data type you need to create the list: an array with a mix of numbers and strings, an array with only strings, or just a string. Do whatever makes sense to you.
    Write tests for your application's business logic. See the section below that covers testing.


## Setup/Installation Requirements


1. Make sure you are on the correct repository. You can find the link here: https://github.com/kimmykokonut/mr-roboger-cr3
2. On the top-right corner of the page, click Fork (dropdown) > Create a new fork
3. Under "Owner," select the dropdown menu and make sure you are the owner for the forked repository.
4. You may optionally give the fork a new name in the "Repository name" field.
5. Copy the Default branch
6. Click Create fork

Clone the repository

1. Navigate to your fork on github.com
2. Above the list of files, click <>Code
3. Copy the URL for the repository (I use the HTTPS link)
4. In your terminal, navigate to the working directory you desire
5. Type: git clone (then paste the HTTPS link)
6. Press Enter (now you have a local clone!)

View my code and see it rendered

1. In Terminal, navigate to the working directory containing the clone
2. Type code . to open code in VS Code (or open directory in text editor of your choosing)

If you do not have VS Code, you may download it here: https://code.visualstudio.com/download

3. To see it rendered in a browser, right click on the index.html file in VS Code and choose "Open with Live Server"

If you do not have Live Server extension installed in VS Code, directions are here: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
_Optionally if you do not want to see my code or fork or clone, you may just enjoy the finished result on my github pages. https://kimmykokonut.github.io/mr-roboger-cr3/

## Known Bugs

* None known

## License

MIT License. See license.md for more detail.

Copyright (c) 27 October 2023 Kim Robinson


## TDD Testing
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