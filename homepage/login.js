var userid = document.getElementById("userid");
var passid = document.getElementById("passid");
var loginid = document.getElementById("loginid");


function submitClick(){
  var firebaseRef = firebase.database().ref();

  var usernameVal = userid.value;
  var passVal = passid.value;

  firebaseRef.push().set(usernameVal);
  firebaseRef.push().set(passVal);
  window.alert("Done!");

}
