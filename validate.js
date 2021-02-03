var submit = document.getElementById("submit");
submit.onclick = function(){
    validate()
}

function validate(){
    if(isEmpty() != ""){
        alert("Enter "+isEmpty());
    }
    if(!isPhonevalid()){
        alert("Phone number should be of 10 digits");
    }
    if(!nameValidate()){
        alert( "Name not correct" );
    }
}

function isEmpty(){
    var s="";
    var x = document.forms["myform"]["name"].value;
    if(x == ""){
        s =s + "name ";
    }
    x = document.forms["myform"]["email"].value;
    if(x == ""){
        s = s + "E-mail "
    }
    x = document.forms["myform"]["phone"].value;
    if(x == ""){
        s = s + "phone ";
    }
    
    return s;
}

function isPhonevalid(){
    var x = document.forms["myform"]["phone"].value;
    if(x.length == 10){
        return true;
    }
    else{
        return false;
    }
}

function nameValidate(){
    var x = document.forms["myform"]["name"].value;
    var re = /^[A-Za-z]+$/;
    return re.test(x);
}


//validation of qualifications and project are in adding.js