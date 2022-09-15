document.addEventListener('keypress',keyhandler)

ctrl=false;
dark=false;

function keyhandler(event){
    console.log("key pressed:",event.key);
    if(event.ctrlKey){
        ctrl=true;
        console.log("key pressed: ctrl",ctrl);
    }
    if((event.key=="m"||event.key=="M")&&ctrl==true){
        if(dark==true){
            dark=false;
            console.log("been there!");
            document.getElementById("bod").style.backgroundColor="white";
            document.getElementById("ele1").style.color="black";
            document.getElementById("ele2").style.color="black";
            document.getElementById("ele3").style.color="black";
            document.getElementById("ele4").style.color="black";
            document.getElementById("ele5").style.color="black";
            document.getElementById("ele6").style.color="black";
            document.getElementById("ele8").style.color="black";
            document.getElementById("ele7").style.color="black";
            document.getElementById("ele10").style.backgroundColor="white";
            document.getElementById("ele11").style.backgroundColor="white";
        }
        else{
            dark=true;
            console.log("been there!");
            document.getElementById("bod").style.backgroundColor="grey";
            document.getElementById("ele1").style.color="white";
            document.getElementById("ele2").style.color="white";
            document.getElementById("ele3").style.color="white";
            document.getElementById("ele4").style.color="white";
            document.getElementById("ele5").style.color="white";
            document.getElementById("ele6").style.color="white";
            document.getElementById("ele7").style.color="white";
            document.getElementById("ele8").style.color="white";
            document.getElementById("ele10").style.backgroundColor="white";
            document.getElementById("ele11").style.backgroundColor="white";
        }
    }
    else{
        ctrl=false;
    }
}

function myFunction1() {
    a=document.getElementById("mail").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (a.match(validRegex)) {
        document.getElementById("mail1").innerHTML="";
    } else {
        document.getElementById("mail1").innerHTML="invalid Email";

  }
}

function myFunction2() {
    a=document.getElementById("username").value;
    var u=/[A-Z]/g;
    var n=/[0-9]/g;
    if (a.match(u)&&a.match(n)) {
        document.getElementById("username1").innerHTML="";
    } else {
        document.getElementById("username1").innerHTML="invalid Username";
  }
}

function myFunction3() {
    a=document.getElementById("confirmpass").value;
    b=document.getElementById("pass").value;
    if (a.localeCompare(b)){
        document.getElementById("confirmpass1").innerHTML="Password doesn't match";
    } else {
        document.getElementById("confirmpass1").innerHTML="";
    }
}

function myFunction4(){
    // console.log("been there!");
    var a=document.getElementById("manager").value;
    b=document.getElementById("mail").value;
    c=document.getElementById("username").value;
    d=document.getElementById("pass").value;
    e=document.getElementById("confirmpass").value;
    f=document.getElementById("lead").value;
    if(a==""||b==""||c==""||d==""||e==""||f==""){
        // alert("Enter all required fields!!");
        alert("Please enter all fields");
        // alert("Manager Name: "+a+"\n"+"Mail: "+b+"\n"+"Username: "+c+"\n"+"Lead: "+f+"\n"+"Pass: "+d+"\n"+"ConfirmPass: "+e);
    }
    else{
        alert("Manager Name: "+a+"\n"+"Mail: "+b+"\n"+"Username: "+c+"\n"+"Lead: "+f);
    }
}