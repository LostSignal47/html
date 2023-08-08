
function myfunction() {

    alert("Hello CSMJU");

    console.log("Hello MJU");

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "Change....";
    document.getElementById("header1").style.color = "#FF0000";

    var x = 8;
    var y = 20;
    var z = 3;

    // หาค่าเฉลรายน --> header2
    //document.getElementById("header2").innerHTML = ((x+y+z)/3).toFixed(2);
}

function likeFunction(){
    var counter = 
    parseInt(document.getElementById("result").innerText);

    //เพิ่ม counter 1
    counter++;
    document.getElementById("result").innerText = counter;

    //ปรับขนาดตัวอักษรเพิ่มขึ้น 1
    document.getElementById("result").style.fontSize=10+counter+"px";
}




function loveFunction(){
    var counter = 
    parseInt(document.getElementById("result").innerText);

    //เพิ่ม counter 10
    counter+=10;
    document.getElementById("result").innerText = counter;

    //ปรับขนาดตัวอักษรเพิ่มขึ้น 5
    document.getElementById("result").style.fontSize=50+counter+"px";
}


function sadFunction(){
    document.getElementById(icon)
    var counter = 
    parseInt(document.getElementById("result").innerText);

    //หัวใจลด 10
    counter-=10;
    document.getElementById("result").innerText = counter;
}