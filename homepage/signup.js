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

var email = '';
var fullname = '';
var username = '';
var password = '';
var repassword = '';
var mobile = '';
var address= '';
var sex = '';


function validateEmail(email) {
  var re = /^(((?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}))$/;
  return re.test(email);
}

function validateMobile(mobile) {
 
  var re = /^(09|\+639)\d{9}$/;
  return re.test(mobile);
}

function validatePassword(user_repass,password,repassword){
	if( password == repassword){
		
		user_repass.setCustomValidity("");
		return true ;
		
	}
	user_repass.setCustomValidity("Password must match"); 
	return false;

}

function isValid(email,user_repass,password,repassword,mobile){
	return validateEmail(email) && validatePassword(user_repass,password,repassword) && validateMobile(mobile);
}


var d = firebase.database();

var auth = firebase.auth();


function sign_up() {
	// document.getElementById("user_fname").setCustomValidity("FILL IT OUT BITCH");
	email = document.getElementById('user_email').value;
	fullname = document.getElementById('user_fname').value;
	username = document.getElementById('user_name').value;
	password = document.getElementById('user_pass').value;
	repassword = document.getElementById('user_repass').value;
	mobile = document.getElementById('user_num').value;
	address= document.getElementById('user_address').value;
	sex = document.getElementById('user_sex').value;
	
	
	
    if(email == ''  && fullname == '' && username == '' && password == '' && repassword != '' && mobile == '' && address == '' && sex == ''){
	    console.log("empty!!")
    } else {
		if(isValid(email,user_repass,password,repassword,mobile)){
			console.log(email);
			var exists = false;
			message = '';
			d.ref('users').once('value', function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
						var childData = childSnapshot.key;		
						if(childSnapshot.child('username').val() == username){
							message = "username is already taken."
							exists = true;
							return;
						} 
						if(childSnapshot.child('mobile').val() == mobile){
							message = "mobile is already taken."
							exists = true
							return;
						}	
						return;
		    	});
		    	
		    	
			}).then(() => {
				console.log(exists);
		    	if(!exists){
		    		firebase.auth().createUserWithEmailAndPassword(email, password)
			   		 .then(function(user) {
				    	  var uid = firebase.auth().currentUser.uid; 
				    	  d.ref('users').child(uid).set({
					        fullname: fullname,
					        username: username, 
					        sex:sex,
					        email: email,
					        address: address,
					        mobile: mobile,
					        password: password,
					        re_password: repassword
					    });
			         console.log("Create user and sign in Success", user);
			         alert("User Created")
			         auth.signOut()
			   		 }).catch(function(error){
							console.log(error.message);
							alert(error.message);
			    	 });				
			    } else {
			    	alert(message);
			    }
			
			})


		} else {
		console.log("something went wrong")

		}


    }
    

}
function redirect() {
  window.location = "login.html"
}