// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZ5AyDx13Le8CpTPwd78VLp5ZFkvzbASI",
    authDomain: "bookswap-ac584.firebaseapp.com",
    databaseURL: "https://bookswap-ac584.firebaseio.com",
    projectId: "bookswap-ac584",
    storageBucket: "bookswap-ac584.appspot.com",
    messagingSenderId: "47870656788"
  };
  firebase.initializeApp(config);

var auth = firebase.auth();
var  d = firebase.database();
function log_out(){
	auth.signOut()
	alert('Logging out')
	window.location = "login.html";
	
}
