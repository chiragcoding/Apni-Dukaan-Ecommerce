const search=document.querySelector(".search input");
const shopbutton=document.getElementById("shopbutton");
const searchbox=document.getElementById("searchbox");
const searchbox2=document.getElementById("searchbox2");
const searchbox3=document.getElementById("searchbox3");
const searchbox4=document.getElementById("searchbox4");
// console.log(search);
// let value=search.value;
// console.log(value);
// console.log(typeof(value));

search.addEventListener("input",function(){
    let value=search.value.trim();
    if(value=='Men'){
        searchbox.style.visibility="visible";
    }
    else if(value=="Women"){
        searchbox2.style.visibility="visible";
        

    }
    else if(value=="Sports"){
        searchbox3.style.visibility="visible";

    }
    else if(value=="Beauty")
    {
        searchbox4.style.visibility="visible";
    }
    else{
        searchbox.style.visibility="hidden"
        searchbox2.style.visibility="hidden"
        searchbox3.style.visibility="hidden"
        searchbox4.style.visibility="hidden"

    }


    
});
search.value="";
