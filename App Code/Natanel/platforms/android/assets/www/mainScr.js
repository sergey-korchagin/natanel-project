$( document ).ready(function() {
    console.log( "ready!" );
		
	var client = new WindowsAzure.MobileServiceClient(
    "https://natanel.azure-mobile.net/",
    "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
);

//Get user data from service and show it 
document.getElementById("mytext").value= 'test';
});
