let row = document.getElementsByClassName("row")[0];
    let bar = document.getElementsByClassName("bar")[0];
    let y = Math.ceil(data.length / 6);
    show();
    function show(){
        for(x=0;x<data.length;x++){
                let div = document.createElement("div");
                div.setAttribute("class","col-12 col-sm-6 col-lg-4 item");
                let img = document.createElement("img");
                img.setAttribute("src",data[x].img);
                let h5 = document.createElement("h5");
                let h5Txt = document.createTextNode(data[x].h5);
                h5.appendChild(h5Txt);
                let p = document.createElement("p");
                let pTxt = document.createTextNode(data[x].txt);
                p.appendChild(pTxt);
                let links = document.createElement("a");
                links.setAttribute("href",data[x].link);
                links.setAttribute("class","text-danger");
                links.textContent = "...繼續閱讀";
                p.appendChild(links);
                div.appendChild(img);
                div.appendChild(h5);
                div.appendChild(p);
                row.appendChild(div);
            }
        let item = document.getElementsByClassName("item");
        for (const j of item) {
            j.style.display = "none";
        }
        
        let min = 0;
        let max = 6;
        for(k=min; k<max ; k++){
            item[k].style.display = "block";
        }
        for(i=1;i<(y+1);i++){
            let aBtn = document.createElement("span");
            aBtn.setAttribute("class","linkBtn");
            let aBtnTxt = document.createTextNode(i);
            aBtn.appendChild(aBtnTxt);
            bar.appendChild(aBtn);
            var linkBtn = document.getElementsByClassName("linkBtn");
        }
        for (const barBtn of linkBtn) {
            barBtn.addEventListener("click",function(){
                let item = document.getElementsByClassName("item");
                for (const j of item) {
                    j.style.display = "none";
                }
                min = (this.textContent - 1)*6;
                max = this.textContent * 6;
                for(b=min;b<max;b++){
                    item[b].style.display = "block";
                }
            })
        }
        
        
    }