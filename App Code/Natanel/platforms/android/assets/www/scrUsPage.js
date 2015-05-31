$(document).ready(function() {
     client = new WindowsAzure.MobileServiceClient(
        "https://natanel.azure-mobile.net/",
        "mIStGsJbknpIIMIPWipAlqOnvbUSys14");

    ls = window.localStorage;
    //ls.clear();
    usr = ls.getItem("email") || '';
    pwd = ls.getItem("pwd") || '';
    console.log(usr);
    console.log(pwd);
    if (notEmpty(usr) && notEmpty(pwd)) {
        console.log('get data');
        getData(usr, pwd);
    } else {
        console.log('please login');
        $(location).attr('href', 'index.html');
    }

});

    function getData(username, passwd) {
		console.log('22222222');
        client.getTable('Item').read({
                email: username,
                pwd: passwd
            })
            .done(function(result) {
                console.log(result);
                //console.log('em ' + result.email);
                if (result.length === 1) {
                    //Get user data from service and show it 
					id = result[0].id;
					//sub_pwd
                    document.getElementById("email").value = (result[0].email);
                    document.getElementById("name").value = (result[0].first_name);
                    document.getElementById("lastname").value = result[0].last_name;
                    document.getElementById("phone").value = result[0].phone;
					console.log('22222222');
                }
            }, function(err) {
                alert(err);
            })


    }

    function updateUserData() {
		console.log('33333333333');
        var item = {
			id: id,
			email: usr,
			pwd: pwd,
            first_name: document.getElementById("name").value,
            last_name: document.getElementById("lastname").value,
            phone: document.getElementById("phone").value
        };
        client.getTable("Item").update(item)
            .done(function(result) {
                console.log(result);
				alert('success');

            }, function(err) {
                console.log(err);
            })
    }






// urlParam = function(name){
// var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
// if (results==null){
// return null;
// }
// else{
// return results[1] || 0;
// }
// }