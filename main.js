function showbf() {
    let bf = document.querySelector("#breakfast")
    let starter=document.querySelector("#starters")
    let lunch=document.querySelector("#lunch")
    let dinner=document.querySelector("#dinner")

    bf.style.display="block"
    starter.style.display="none"
    lunch.style.display="none"
    dinner.style.display="none"
    
}
function showlnh() {
    let bf = document.querySelector("#breakfast")
    let starter=document.querySelector("#starters")
    let lunch=document.querySelector("#lunch")
    let dinner=document.querySelector("#dinner")

    bf.style.display="none"
    starter.style.display="none"
    lunch.style.display="block"
    dinner.style.display="none"
}
function showdnr() {
    let bf = document.querySelector("#breakfast")
    let starter=document.querySelector("#starters")
    let lunch=document.querySelector("#lunch")
    let dinner=document.querySelector("#dinner")

    bf.style.display="none"
    starter.style.display="none"
    lunch.style.display="none"
    dinner.style.display="block"
}
function showstt() {
    let bf = document.querySelector("#breakfast")
    let starter=document.querySelector("#starters")
    let lunch=document.querySelector("#lunch")
    let dinner=document.querySelector("#dinner")

    bf.style.display="none"
    starter.style.display="block"
    lunch.style.display="none"
    dinner.style.display="none"
}

function slide1(){
    let a=document.querySelector("#reviews .one")
    let b=document.querySelector("#reviews .two")
    let c=document.querySelector("#reviews .three")
    let d=document.querySelector("#reviews .four")


    a.style.display="block"
    b.style.display="none"
    c.style.display="none"
    d.style.display="none"

}
function slide2(){
    let a=document.querySelector("#reviews .one")
    let b=document.querySelector("#reviews .two")
    let c=document.querySelector("#reviews .three")
    let d=document.querySelector("#reviews .four")


    a.style.display="none"
    b.style.display="block"
    c.style.display="none"
    d.style.display="none"


}
function slide3(){
    let a=document.querySelector("#reviews .one")
    let b=document.querySelector("#reviews .two")
    let c=document.querySelector("#reviews .three")
    let d=document.querySelector("#reviews .four")


    a.style.display="none"
    b.style.display="none"
    c.style.display="block"
    d.style.display="none"
    e.style.color="orangered"


}
function slide4(){
    let a=document.querySelector("#reviews .one")
    let b=document.querySelector("#reviews .two")
    let c=document.querySelector("#reviews .three")
    let d=document.querySelector("#reviews .four")


    a.style.display="none"
    b.style.display="none"
    c.style.display="none"
    d.style.display="block"


}

function back(){
    h=document.querySelector("#table .box .right")
    i=document.querySelector("#table .box .right2")

    h.style.display="block"
    i.style.display="none"
}

function booked(){
    a=document.querySelector("#table .box .right #name").value
    b=document.querySelector("#table .box .right #email").value
    c=document.querySelector("#table .box .right #phone").value
    d=document.querySelector("#table .box .right #date").value
    e=document.querySelector("#table .box .right #time").value
    f=document.querySelector("#table .box .right #people").value
    g=document.querySelector("#table .box .right #message").value
    h=document.querySelector("#table .box .right")
    i=document.querySelector("#table .box .right2")

    if (a==""|b==""|c==""|d==""|e==""|f==""){
        alert("Enter All Details")
    }
    else{
    
    h.style.display="none"
    i.style.display="block"
    }
    
    one=document.querySelector("#table .box .right2 h2")
    one.textContent="Dear "+a+","

    two=document.querySelector("#table .box .right2 #p1")
    two.textContent="We are pleased to inform you that your table reservation at Yummy Foods has been successfully confirmed. We look forward to hosting you on "+d+" at "+e+"."

    three=document.querySelector("#table .box .right2 #p2")
    three.textContent="If you have any special requests or need further assistance, please do not hesitate to contact us at +91 8967453215."

    four=document.querySelector("#table .box .right2 button")
    four.textContent="Back"
    four.onclick=function(){  
        h=document.querySelector("#table .box .right")
        i=document.querySelector("#table .box .right2")
    
        h.style.display="block"
        i.style.display="none"

    }
}


function putdata(){

const data={
name:document.querySelector("#table .box .right #name").value,
email:document.querySelector("#table .box .right #email").value,
phone:document.querySelector("#table .box .right #phone").value,
date:document.querySelector("#table .box .right #date").value,
time:document.querySelector("#table .box .right #time").value,
people:document.querySelector("#table .box .right #people").value,
message:document.querySelector("#table .box .right #message").value
}

try{
    fetch("http://127.0.0.1:8080/insert",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    console.log("Success",data)
}
catch(error){
    console.log(error)
}

}