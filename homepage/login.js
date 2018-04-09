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
function log_in(){
	
	email = document.getElementById('user').value;
	password = document.getElementById('password').value;
	if(email == '' || password == ''){
		console.log('empty')
	} else {
		d.ref('users').once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
				var childData = childSnapshot.key;		
				if(childSnapshot.child('username').val() == email){
					console.log(childSnapshot.child('email').val() )
					email = childSnapshot.child('email').val(); 
					return;
				} 		
    	});   	   	
		}).then(() => {
			console.log(email);
			auth.signInWithEmailAndPassword(email, password).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
	
			  if(errorCode === 'auth/invalid-email' || errorCode ==='auth/user-not-found'){
			  		alert("ACCOUNT DOESN'T EXIST");
			  } else {
			  	alert(errorMessage);
			  }
			  
			});

		});
	
	}
	

	
	
	
}
firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log("user signed in");
	  	window.location = "userprofile.html";
	  }
});
function redirect() {
  window.location = "signup.html"
}