// Assignment Code
var low = 8;
var high = 128;
var capitalOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseOptions = capitalOptions.map(element => {
    return element.toLowerCase();
});
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];


var generateBtn = document.querySelector("#generate");



function writePassword() {
    var charAmount = prompt("How many character would you like your password to have?");
    if (charAmount >= low && charAmount <= high) {
        console.log(charAmount);
    } else {
        alert("Please enter an amount of characters between 8 and 128.");
        charAmount;
    }
    var capitals = confirm("Would you like your password to include any capital letters?");
    console.log(capitals);

    var littles = confirm("Would you like your password to include any lowercase letters?");
    console.log(littles);

    var numbers = confirm("Would you like your password to include any numbers?");
    console.log(numbers);

    var special = confirm("Would you like your password to include any special characters?");
    console.log(special);

    if (!capitals && !littles && !numbers && !special) {
        alert("Password must contain at least one of the following: Capital letters, Lowercase letters, Numbers, or Special characters.");
        capitals;
        littles;
        numbers;
        special;

    }

}


//Need to be able to access the value stored in each variable inside of this function



function generatePassword() {


}
//add generate password function, based on responses to confirms -- if true include  -- push into new array 

// generatePassword();

// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);