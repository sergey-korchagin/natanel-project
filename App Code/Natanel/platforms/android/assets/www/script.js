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
        console.log('auto logon');
        validateUser(usr, pwd);
    } else {
        console.log('please login');
    }

});



//check if user exists
function submitForm() {

    var tmp = document.forms["login"]["fullname"].value;
    var tmp2 = document.forms["login"]["password"].value;
    var tmp3 = CryptoJS.MD5(tmp2).toString();

    validateUser(tmp, tmp3);
}




function localJsonpCallback(json) {
    console.log(json);
}

//New user 
function newUserFunc() {
    var mail = document.forms["newUserForm"]["userMail"].value;
    var pwd = document.forms["newUserForm"]["userPassword"].value;
    var subpwd = document.forms["newUserForm"]["userSubPassword"].value;
    var name = document.forms["newUserForm"]["userName"].value;
    var secName = document.forms["newUserForm"]["userSecondName"].value;
    var phone = document.forms["newUserForm"]["userPhone"].value;


    //Check input

    if (mail.indexOf('@') <= 0) {
        alert('Incorrect email, only @gov.il');
    } else if (mail.indexOf('gov.il') <= 0) {
        alert('only gov.il email');
    } else if (pwd.length < 7 || subpwd < 7) {
        alert("password must contain at least 7 digits")
    } else if (pwd != subpwd) {
        alert('passwords not equals');
    } else if (!isFinite(String(phone)) || phone.length < 9) {
        alert('incorrect phone number');
    } else {
        var hash_pass = CryptoJS.MD5(pwd).toString();
        console.log(hash_pass);

        var client = new WindowsAzure.MobileServiceClient(
            "https://natanel.azure-mobile.net/",
            "mIStGsJbknpIIMIPWipAlqOnvbUSys14"
        );
        var item = {
            email: mail,
            pwd: hash_pass,
            first_name: name,
            last_name: secName,
            phone: phone
        };
        client.getTable("Item").insert(item)
            .done(function(result) {
                console.log(result);
                $(location).attr('href', 'userPage.html'); //?email=' + result.email + '&pass=' + hash_pass);
            }, function(err) {
                alert(err);
            })


    }

}

function validateUser(usrname, passwd) {
    client.getTable('Item').read({
            email: usrname,
            pwd: passwd
        })
        .done(function(result) {
            console.log(result);

            ls.setItem("email", usrname);
            ls.setItem("pwd", passwd);

            if (result.length === 1) {
                window.location = "main.html";
            } else {
                alert('user name or password is incorrect');
            }
        }, function(err) {
            alert(err);
        })

}