let lightBox = document.getElementById("lightbox");
    let lightImg = document.getElementsByClassName("lightimg")[0];
    let btnClose = document.getElementsByClassName("btn-close")[0];
    let btnNext = document.getElementsByClassName("btn-next")[0];
    let btnPre = document.getElementsByClassName("btn-pre")[0];
    let light = document.getElementsByClassName("light");
    let body = document.getElementsByTagName("body")[0];
    let x = 1;
    for (const l of light) {
        l.addEventListener("click",function(){
            let y = this.getAttribute("value");
            body.style.overflow = "hidden";
            lightBox.style.display = "block";
            let imgSrc = this.getAttribute("data-href");
            lightImg.setAttribute("src",imgSrc);
            btnNext.addEventListener("click",function(){
                x++;
                if(x>y){
                    x=y
                    let srcName = lightImg.setAttribute("src",imgSrc.substring(imgSrc,imgSrc.length - 5) + x + imgSrc.substring(imgSrc.length - 4));
                }
                let srcName = lightImg.setAttribute("src",imgSrc.substring(imgSrc,imgSrc.length - 5) + x + imgSrc.substring(imgSrc.length - 4));
            })
            btnPre.addEventListener("click",function(){
                x--;
                if(x<1){
                    x=1
                    let srcName = lightImg.setAttribute("src",imgSrc.substring(imgSrc,imgSrc.length - 5) + x + imgSrc.substring(imgSrc.length - 4));
                }
                let srcName = lightImg.setAttribute("src",imgSrc.substring(imgSrc,imgSrc.length - 5) + x + imgSrc.substring(imgSrc.length - 4));
                
            })
        })
    }
    btnClose.addEventListener("click",function(){
        lightBox.style.display = "none";
        body.style.overflow = "auto";
    })