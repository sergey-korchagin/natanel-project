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

function registrateMe () {
	console.log('gcm reg attempt');
	var pushNotification = window.plugins.pushNotification;  
	 pushNotification.register( 
		successHandler,
		errorHandler, 
		{ 'senderID':'917421012976', 'ecb':'onNotificationGCM' // callback function 
		} );

		function successHandler(res) {
			console.log(res);
			alert('succ');
			alert(res);
		};
		function errorHandler(res) {
			console.log(res);
			alert('err');
			alert(res);
		}
		
		function onNotificationGCM(e) {
			console.log(e);
			alert(e);
		}
}