/*
 * navigate between pages function
 * uses button id for go to needed page
 */
function goToPage(pageName) {
    //document.location ="userPage.html";
    var url = pageName + ".html";
    $(location).attr('href', url);
    return false;
}


function close_window() {
    if (confirm("Exit from application?")) {
        navigator.app.exitApp();
    }
}

function notEmpty(str) {
	if(str !== undefined && str !== '' && str !== null) {
		return true;
	}
	return false;
}

function userExit(){
	
	 ls = window.localStorage;
	 ls.clear();
	 $(location).attr('href', 'index.html');
}