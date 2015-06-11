$( document ).ready(function() {
	//addPhones();
	getPhones();
	

});

function getPhones(){
	  var client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
    );
	client.getTable('phones').read()
        .done(function(result) {
            console.log(result);
                    //Get user data from service and show it 				
						var i = 0;
						for(i; i<result.length;i++){				
					id = result[i].id;
					
					var tmp = result[i].name;
					var tmp1 = result[i].phone;
				
					$('#phoneBook').append('<div data-role="collapsible"><h3>'+tmp+'</h3><ul data-role="listview"><li><a href="#">'+tmp1+'</a></li></ul></div>');
					$('#phoneBook').collapsibleset('refresh');
				
					}

        }, function(err) {
            alert(err);
        })
}

// tmp need to delete
function addPhones(){
	
	var client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
	);
	
		
	var message ={
		name : 'System',
		phone: '026666664'
	};
	
	 client.getTable("phones").insert(message)
        .done(function(result) {
        }, function(err) {
            alert(err);
        })
}