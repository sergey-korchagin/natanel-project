


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

	// $('#popupAddMess').popup("close");

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