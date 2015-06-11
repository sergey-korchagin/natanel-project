$( document ).ready(function() {
	//addPhones();
	getPhones();
	

});

function getPhones(){
	  var client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
    );
	client.getTable('phones').read(
	//{username: usr}
	)
        .done(function(result) {
            console.log(result);
               // if (result.length === 2 ) {
                    //Get user data from service and show it 
					//while(result.length >=1){
						var i = 0;
						for(i; i<result.length;i++){				
					id = result[i].id;
					
					var tmp = result[i].name;
					var tmp1 = result[i].phone;
				
					$('#phoneBook').append('<div data-role="collapsible"><h3>'+tmp+'</h3><ul data-role="listview"><li><a href="#">'+tmp1+'</a></li></ul></div>');
					$('#phoneBook').collapsibleset('refresh');
				
					//var tmp = result[i].username +' say: '
					//var tmp1 = '<tr><td>'+tmp+'</td><td>'+result[i].messagetext+ '</td></tr>' 
					//$('#myTable').append(tmp1);
                  //  document.getElementById("textarea-1").value = (result[1].username +': ' + result[1].messagetext );
					}
             //   }
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
            //$(location).attr('href', 'main.html');//?email=' + result.email + '&pass=' + hash_pass);
        }, function(err) {
            alert(err);
        })
}