// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordLength();
  characterType();
  

}

var passwordLength = function(){
  var passwordlLengthPrompt =  window.prompt("Choose the lenght of the password by entering a number between 8-128");
  
   //NEED TO PUT VALIDATION HERE THAT THEY CAN ONLY SELECT 8-120
   if (passwordlLengthPrompt > 7 && passwordlLengthPrompt < 129) {
      alert("You chose a password lenght of " + passwordlLengthPrompt + ".");
   }
   else {
     passwordLength();  
   }
   console.log(passwordlLengthPrompt);
};
var characterTypePrompt = [];
var characterType = function () {
  
  characterTypePrompt.push(window.prompt('Please choose a character type, enter 1 for Lowercase, 2 for Uppercase, 3 for Numeric, 4 for Special Characters.'));
  console.log(characterTypePrompt.length);
  characterTypePrompt = parseInt(characterTypePrompt);
  switch (characterTypePrompt) {
    case 1:
      //Need password to be lowercase  lowercase
      alert("You have chosen Lowercase.");
      break;
    case 2:
      //Need password to be uppercase. Uppercase
      alert("You have chosen Uppercase.");
    break;
    case 3:
      //need password to be numerical
      alert("You have chosen Numeric.");
      break;
    case 4:
     //need all characters
     alert("You have chosen Special Characters.");
      break;
    default:
      characterType();
  }
  var addMoreConfirm = window.confirm('Would you like to add another character type?');
  if(addMoreConfirm){
    characterType();
  }
  else{
    //I want to reach through each element of the array and put out a message showing what they picked
    window.alert("You have chosen the following character types: \n"  + characterTypePrompt + " \n" +characterTypePrompt[1] + " \n" + characterTypePrompt[2] + " \n" + characterTypePrompt[3]);
  }

console.log(characterTypePrompt);
  };

  

//PSUDO CODE HERE
//click the button and the following prompts show up
  //Length between 8-128 characters
    //User enters their choice and it is validated

  //Character types: lowercase, uppercase, numeric, and/or sepcial characters
    //only one character type can be selected
    //User enters their choice and it is validated
    //NOTE I think the character type is what the whole password is made off

  //Generate password 
    //display on screen
    //OR display in alert

  
  //Can I do a function to generat things randomely with Math
  //can write a function to do the character types?



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
