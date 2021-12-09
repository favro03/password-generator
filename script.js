// Assignment Code
var characterChoices= [];
var string = [];
var passwordInput = "";
var passwordlLengthPrompt = "";
var word = "";
var passwordLengthTotal = "";

//Functions
var passwordLength = function(){
  passwordLengthTotal=  window.prompt("Choose the length of the password by entering a number between 8-128");
  
   //NEED TO PUT VALIDATION HERE THAT THEY CAN ONLY SELECT 8-120
   if (passwordLengthTotal > 7 && passwordLengthTotal < 129) {
      alert("You chose a password lenght of " + passwordLengthTotal + ".");
   }
   else {
     passwordLength();  
   }
   passwordLength = passwordLengthTotal;
   console.log(passwordLengthTotal);
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

var choiceConversion = function(){
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

var createPassword = function(){
  for(var i = 0; i < passwordLengthTotal; i++) {
    var char = Math.floor(Math.random() * passwordInput.length);
    word += passwordInput.charAt(char);
  }
return word;
};

 
//code provided 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  characterType();
  choiceConversion();
  
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
generateBtn.addEventListener("click", writePassword);
