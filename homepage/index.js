var usernameText = document.getElementById("usernameText");
var passText = document.getElementById("passText");
var LoginBtn = document.getElementById("LoginBtn");

function submitClick(){
  var firebaseRef = firebase.database().ref();

  var usernameVal = usernameText.value;
  var passVal = passText.value;

  // firebaseRef.push().set(usernameVal);
  firebaseRef.push().set(usernameVal);
  firebaseRef.push().set(passVal);

  window.alert("Done!");
}
