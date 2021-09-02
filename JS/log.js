var mail = document.getElementById("mail");
var pswd = document.getElementById("password");
var nomail= document.getElementById("nomail");
var nopswd = document.getElementById("nopassword");
var remail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var repas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function validat(){
    if(mail.value.trim()!=""){
        if(pswd.value.trim()!=""){
            if(remail.test(mail.value)){
                nomail.innerHTML="";
                mail.style.border="";
                if(repas.test(pswd.value)){
                    nopswd.innerHTML="";
                    pswd.style.border="";
                    return true;
                }
                else{
                    nopswd.innerHTML="Password entered is wrong";
                    nopswd.style.color="red";
                    nopswd.style.fontSize="16px";
                    pswd.style.border="2px solid red";
                    return false;
                }
            }
            else{
                if(pswd.value.trim()!=""){
                    if(repas.test(pswd.value)){
                        nopswd.innerHTML="";
                        pswd.style.border="";
                    }
                    else{
                        nopswd.innerHTML="Password entered is wrong";
                        nopswd.style.color="red";
                        nopswd.style.fontSize="16px";
                        pswd.style.border="2px solid red";
                       return false;
                    }
                }
                nomail.innerHTML="Entered Email Id is not valid";
                nomail.style.color="red";
                nomail.style.fontSize="16px";
                mail.style.border="2px solid red";
                return false;
            }
        }
        else{
            if(remail.test(mail.value)){
                 nomail.innerHTML="";
                 mail.style.border="";
                 nopswd.innerHTML="This field can't be empty";
                 nopswd.style.color="red";
                 nopswd.style.fontSize="16px";
                 pswd.style.border="2px solid red";
                 return false;
                }
                else{
                    nopswd.innerHTML="This field can't be empty";
                    nopswd.style.color="red";
                    nopswd.style.fontSize="16px";
                    pswd.style.border="2px solid red";
                    nomail.innerHTML="Entered Email Id is not valid";
                    nomail.style.color="red";
                    nomail.style.fontSize="16px";
                    mail.style.border="2px solid red";
                    return false;
                }
            }
        }
    else{
        if(pswd.value.trim()!=""){
            if(repas.test(pswd.value)){
                nopswd.innerHTML="";
                pswd.style.border="";
                nomail.innerHTML="You must enter your Email Id";
                nomail.style.color="red";
                nomail.style.fontSize="16px";
                mail.style.border="2px solid red";
                return false;
            }
            else{
                nopswd.innerHTML="Password entered is wrong";
                nopswd.style.color="red";
                nopswd.style.fontSize="16px";
                pswd.style.border="2px solid red";
                 nomail.innerHTML="You must enter your Email Id";
                 nomail.style.color="red";
                 nomail.style.fontSize="16px";
                 mail.style.border="2px solid red";
                 return false;
                }
        }
        else{
            nomail.innerHTML="You must enter your Email Id";
            nomail.style.color="red";
            nomail.style.fontSize="16px";
            mail.style.border="2px solid red";
            nopswd.innerHTML="This field can't be empty";
            nopswd.style.color="red";
            nopswd.style.fontSize="16px";
            pswd.style.border="2px solid red";
            return false;
        }
      
    }
}
// mouse action
function mose(){
    if(mail.value.trim()==""){
    nomail.innerHTML="This field can't be emty";
    nomail.style.color="red";
    nomail.style.fontSize="16px";
    }
   
    if(pswd.value.trim()==""){
        nopswd.innerHTML="This field can't be empty";
        nopswd.style.color="red";
        nopswd.style.fontSize="16px";
    }
}
function moseot(){
if(mail.value.trim()=="" && pswd.value.trim()==""){
            nomail.innerHTML="";
            nopswd.innerHTML="";
        }
    }
