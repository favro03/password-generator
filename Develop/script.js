// Assignment Code
var characterChoices= [];
var string = [];
var passwordInput = "";
var passwordlLengthPrompt = "";

//Functions
var passwordLength = function(){
  passwordlLengthPrompt =  window.prompt("Choose the length of the password by entering a number between 8-128");
  
   //NEED TO PUT VALIDATION HERE THAT THEY CAN ONLY SELECT 8-120
   if (passwordlLengthPrompt > 7 && passwordlLengthPrompt < 129) {
      alert("You chose a password lenght of " + passwordlLengthPrompt + ".");
   }
   else {
     passwordLength();  
   }
   console.log(passwordlLengthPrompt);
};

var characterType = function () {
  var characterTypePrompt=(window.prompt('Please choose a character type, enter 1 for Lowercase, 2 for Uppercase, 3 for Numeric, 4 for Special Characters.'));
  characterChoices.push(characterTypePrompt);
  console.log(characterChoices.length);
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
      characterChoices.pop();
      characterType();
  }
  var addMoreConfirm = window.confirm('Would you like to add another character type?');
  if(addMoreConfirm){
    characterType();
  }
  else{
    window.alert("You have chosen the following character types: \n"  + characterChoices[0] + " \n" +characterChoices[1] + " \n" + characterChoices[2] + " \n" + characterChoices[3]);
  }

console.log(characterChoices);
};

var passwordGenerated = function(){
  for (var i = 0; i < characterChoices.length; i++){
    if (characterChoices[i]==='1' ){
      string.push('abcdefghijklmnopqurstuvwxyz');
    }
    if (characterChoices[i]==='2'){
      string.push('ABCDEFGHIJKLMNOPQURSTUVWXYZ');
    }
    if (characterChoices[i]==='3'){
      string.push('0123456789');
    }
    if (characterChoices[i]==='4'){
      string.push('!@#$%^&*()');
    }
  }
  console.log(string);

  for(var x = 0; x < string.length; x++){
    passwordInput += string[x];
    
  }
  
  console.log(passwordInput);
};

//code provided 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordLength();
  characterType();
  passwordGenerated();
  

}


  //Generate password 
    //display on screen
    //OR display in alert

  
  //Can I do a function to generat things randomely with Math
  //can write a function to do the character types?

  //can I do an object that shows 1  = uppercase 2 lowercase 3 number 4 special characters



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
