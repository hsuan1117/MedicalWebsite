document.getElementById("hamburger").addEventListener("click",function(){
    let nav = document.getElementsByTagName("nav")[0];
    let ht = document.getElementsByClassName("hamT")[0];
    let hm = document.getElementsByClassName("hamM")[0];
    let hb = document.getElementsByClassName("hamB")[0];
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
        ht.style.transform = "rotate(26deg)";
        hb.style.transform = "rotate(-26deg)";
        hm.style.opacity = 0;
    }else{
        nav.style.display = "none";
        ht.style.transform = "rotate(0)";
        hb.style.transform = "rotate(0)";
        hm.style.opacity = 1;
    }
})

let sBtn = document.getElementById("search-btn");
let cValue = "rgb(136, 134, 53)";
sBtn.addEventListener("click",function(){
    let sValue = document.getElementById("search-value");
    if(sValue.style.display == "none" || sValue.style.display == ""){
        sBtn.style.backgroundColor = "rgb(136, 134, 53)";
        sValue.style.display = "inline";
    }else{
        console.log(sValue.value);
        sBtn.style.backgroundColor = "rgba(136, 134, 53 , 0.5)";
        sValue.style.display = "none";
        sValue.value = "";
    }
    
})
