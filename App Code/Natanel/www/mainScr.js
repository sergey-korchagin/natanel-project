$( document ).ready(function() {
    console.log( "ready!" );
		
	
	 ls = window.localStorage;
	//ls.clear();
    usr = ls.getItem("email") || '';
	//console.log("test" + usr);

	getMessage(usr);
	

});

function getMessage(user){
	
	  var client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
    );
	client.getTable('users').read(
	)
        .done(function(result) {
            console.log(result);
                    //Get user data from service and show it 
					
						var i = 0;
						for(i; i<result.length;i++){				
					id = result[i].id;
					var tmp = result[i].username +' say: '
					var tmp1 = '<tr><td>'+tmp+'</td><td>'+result[i].messagetext+ '</td></tr>' 
					$('#myTable').append(tmp1);
					
					}
       
        }, function(err) {
            alert(err);
        })
}


function addMessage(){
	  var client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
	);
	
		 ls = window.localStorage;
		 usr =    usr = ls.getItem("email") || '';
	var message ={
		username : usr,
		messagetext :document.getElementById("textarea").value
	};
	
	 client.getTable("users").insert(message)
        .done(function(result) {
            console.log('myres '+ result);
            $(location).attr('href', 'main.html');//?email=' + result.email + '&pass=' + hash_pass);
        }, function(err) {
            alert(err);
        })
	
}
