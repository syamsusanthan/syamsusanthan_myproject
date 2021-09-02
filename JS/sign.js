var nam = document.getElementById("name");
var adrs = document.getElementById("adrs");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var pwd = document.getElementById("pwd");
var repwd = document.getElementById("repwd");
var noname = document.getElementById("noname");
var noadrs=document.getElementById("noadrs");
var noemail=document.getElementById("noemail");
var nomobile= document.getElementById("nomobile");
var nopwd=document.getElementById("nopwd");
var norepwd=document.getElementById("norepwd");
var u = document.getElementById("u");
var l = document.getElementById("l");
var n = document.getElementById("n");
var meter = document.getElementById("meter");
var namex;
var adx;
var emailx;
var mobilex;
var passwordx;
var conformx;
var reemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var remobile=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var repas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var cap= /^(?=.*[A-Z]).{1,}$/;
var low= /^(?=.*[a-z]).{1,}$/;
var numb =/^(?=.*[0-9]).{1,}$/;
function validate(){
    name1();
    ads();
    mail1();
    mobile1();
    password1();
    conform();
if(namex==1&&adx==1&&emailx==1&&mobilex==1&&passwordx==1&&conformx==1){
    
    return true;
}
else{
    return false;
}
}

function name1(){
    if(nam.value.trim()!=""){
        noname.innerHTML="";
        nam.style.border="";
        return namex=1;
        }
    else{
        noname.innerHTML="Enter Your Name Please";
        noname.style.color="red";
        noname.style.fontSize="16px";
        nam.style.border="2px solid red";
       return namex=0;
    }
}
function ads(){
    if(adrs.value.trim()!=""){
        noadrs.innerHTML="";
        adrs.style.border="";
        return adx=1;
    }
    else{
        noadrs.innerHTML="This field can't be empty";
        noadrs.style.color="red";
        noadrs.style.fontSize="16px";
        adrs.style.border="2px solid red";
        return adx=0;
    }
   
}
function mail1(){
    if(email.value.trim()!=""){
        if(reemail.test(email.value)){
            noemail.innerHTML="";
            email.style.border="";
           return emailx=1;
        }
        else{
            noemail.innerHTML="Email Id entered is invalid";
            noemail.style.color="red";
            noemail.style.fontSize="16px";
            email.style.border="2px solid red";
            return emailx=0;
        }
    }
    else{
        noemail.innerHTML="You must enter your Email Id";
        noemail.style.color="red";
        noemail.style.fontSize="16px";
        email.style.border="2px solid red";
        return emailx=0;
    }
}
function mobile1(){
    if(mobile.value.trim()!=""){
        if(remobile.test(mobile.value)){
            nomobile.innerHTML="";
            mobile.style.border="";
           return mobilex=1;
        }
        else{
            nomobile.innerHTML="Entered mobile number not valid";
            nomobile.style.color="red";
            nomobile.style.fontSize="16px";
            mobile.style.border="2px solid red";
            return mobilex=0;
        }
    }
    else{
        nomobile.innerHTML="Please enter your mobile number";
        nomobile.style.color="red";
        nomobile.style.fontSize="16px";
        mobile.style.border="2px solid red";
        return mobilex=0;
    }
}
function password1(){
    if(pwd.value.trim()!=""){
        if(pwd.value.length>=8){
            if(repas.test(pwd.value)){
                u.innerHTML="";
                l.innerHTML="";
                n.innerHTML="";
                meter.value="15";
                nopwd.innerHTML="Password is strong";
                nopwd.style.color="green";
                nopwd.style.fontSize="16px";
                pwd.style.border="2px solid green";
                return passwordx=1;
            }
            else{
                meter.value="7";
              if(cap.test(pwd.value)){
               
                  u.innerHTML="";
              }
              else{
                  nopwd.innerHTML="Password must contain ";
                  nopwd.style.color="orange";
                  u.innerHTML="UPPERCASE";
                  u.style.color="orange";
              }
              if(low.test(pwd.value)){
                
                l.innerHTML="";
              }
              else{
                nopwd.innerHTML="Password must contain ";
                nopwd.style.color="orange";
                l.innerHTML="lowercase";
                l.style.color="orange";
            }
            if(numb.test(pwd.value)){
              
                n.innerHTML="";
            }
            else{
                nopwd.innerHTML="Password must contain ";
                nopwd.style.color="orange";
                n.innerHTML="number";
                n.style.color="orange";
            }
        }
        }
        else {
            u.innerHTML="";
            l.innerHTML="";
            n.innerHTML="";
            meter.value="2";
                nopwd.innerHTML="Password is too weak";
                nopwd.style.color="red";
                nopwd.style.fontSize="16px";
                pwd.style.border="2px solid red";
                return passwordx=0;
            }
    }    
    else{
        meter.value="0";
        nopwd.innerHTML="This field can't be empty";
        nopwd.style.color="red";
        nopwd.style.fontSize="16px";
        pwd.style.border="2px solid red";
        return passwordx=0;
    }
}
function conform(){
    if(repwd.value.trim()!=""){
        norepwd.innerHTML="";
        repwd.style.border="";
        if(pwd.value==repwd.value){
            norepwd.innerHTML="Password matching";
            norepwd.style.color="green";
            norepwd.style.fontSize="16px";
            repwd.style.border="2px solid green";
           return conformx=1;
        }
        else{
            norepwd.innerHTML="Password not matching";
            norepwd.style.color="red";
            norepwd.style.fontSize="16px";
            repwd.style.border="2px solid red";
            return conformx=0;
        }
    }
    else{
        norepwd.innerHTML="This field can't be empty";
        norepwd.style.color="red";
        norepwd.style.fontSize="16px";
        repwd.style.border="2px solid red";
        return conformx=0;
    }
}
function check(){
    var temp = document.getElementById("pwd");
    if(temp.type==="password"){
        temp.type = "text";
    }
    else{
        temp.type="password";
    }
}