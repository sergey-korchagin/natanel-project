


var admin = 'a@gov.il';
var password = '12';
//check if user exists
function submitForm(){

var tmp = document.forms["login"]["fullname"].value;
var tmp2 = document.forms["login"]["password"].value;
if(tmp == admin && tmp2 == password){

window.location = "main.html"; 

document.forms["login"]["fullname"].value = '';
document.forms["login"]["password"].value = '';
	return false;
	
}
else{
	alert('user mail or password is incorrect');
}	
}


/*
 * navigate between pages function
 * uses button id for go to needed page
 */	
function goToPage(pageName)
{
	//document.location ="userPage.html";
	var url = pageName +".html";
	$(location).attr('href',url);
	return false;
}


function close_window() {
    if (confirm("Exit from application?")) {
        navigator.app.exitApp();
    }
}
	function localJsonpCallback(json) {
  console.log(json);
    }

	//New user 
	function newUserFunc(){
	var mail = document.forms["newUserForm"]["userMail"].value;
	var pwd = document.forms["newUserForm"]["userPassword"].value;
	var subpwd = document.forms["newUserForm"]["userSubPassword"].value;
	var name = document.forms["newUserForm"]["userName"].value;
	var secName = document.forms["newUserForm"]["userSecondName"].value;				
	var phone = document.forms["newUserForm"]["userPhone"].value;
	
	// if(mail.indexOf('@') <= 0){
		// alert('Incorrect email');
	// }else if(mail.indexOf('gov.il')<=0){
		// alert('only gov.il email');
	// }else if(pwd.length <7 || subpwd < 7){
		// alert("password must contain at least 7 digits")
	// }else if(pwd != subpwd){
		// alert('passwords not equals');
	// }else if(!isFinite(String(phone)) || phone.length<9){
		// alert('incorrect phone number');
	// }else{
		 
var client = new WindowsAzure.MobileServiceClient(
    "https://natanel.azure-mobile.net/",
    "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
);
	var item = { email: mail, pwd: pwd, sub_pwd: subpwd, first_name: name, last_name: secName, phone: phone};
client.getTable("Item").insert(item);

	
}