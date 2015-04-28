$( document ).ready(function() {
   
    var email =  urlParam('email');
    var pwd =  urlParam('pass');
	
		
	var client = new WindowsAzure.MobileServiceClient(
    "https://natanel.azure-mobile.net/",
    "mIStGsJbknpIIMIPWipAlqOnvbUSys14");
	
	client.getTable('Item').read({email:email,pwd:pwd})
		  .done(function(result) {
				console.log(result);
				console.log('em ' + result.email);
				if(result.length===1) {
					//Get user data from service and show it 
					document.getElementById("email").value= (result[0].email);
					document.getElementById("name").value= (result[0].first_name);
					document.getElementById("lastname").value= result[0].last_name;
					document.getElementById("phone").value= result[0].phone;
					
				
				}
			}, function(err) {
				alert(err);
				}
			)
	
	
	



});


urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}