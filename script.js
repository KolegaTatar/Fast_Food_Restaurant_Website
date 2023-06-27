    let text_down =  document.querySelector("#text_down");
    let text_up =  document.querySelector("#text_up");
    let reset = document.querySelector("#reset");
    let kontrast = document.querySelector("#kontrast")
    let szarosc = document.querySelector("#szarosc");
    let czcionka = document.querySelector("#czcionka"); 
    let panel = document.querySelector("#panel");
        let panel_text = document.querySelector("#panel-text");
    let body = document.querySelector("#body");
    let html = document.querySelector("#html");
    let size = 100;

    let main = document.querySelector("#main");
    let footer =document.querySelector("#footer");
    let header = document.querySelector("#header");
    let nav = document.querySelector("#nav");
 
    let root = document.documentElement;
    /* panel dostępności */
    panel.addEventListener("click",()=>{
        panel_text.style.display=="none"?panel_text.style.display="block":panel_text.style.display="none";
    })

    text_up.addEventListener("click",()=>{
        size+=10;
        html.style.fontSize =size+"%";
        panel.style.fontSize ="100%";
    })

    text_down.addEventListener("click",()=>{
        size-=10;
        html.style.fontSize =size+"%";
        panel.style.fontSize ="100%";
    })
    kontrast.addEventListener("click",()=>{
        html.style.filter="hue-rotate(156deg)";
    })
    szarosc.addEventListener("click",()=>{
        html.style.filter="grayscale(100%)";
    })
    czcionka.addEventListener("click",()=>{
        html.style.fontFamily= "Futura";
    })
    reset.addEventListener("click",()=>{
        size=100;
        html.style.fontFamily ="Verdana, Geneva, Tahoma, sans-serif";
        html.style.fontSize =size+"%";
        html.style.filter="grayscale(0%)";
        html.style.filter="hue-rotate(0deg)";
    })
/*
    let loader = document.querySelector(".loader");

    window.addEventListener("load",()=>{
        let time = setTimeout(show,2000);
    })

    let show=()=>{
        loader.classList.remove("aktywacja")
    }*/

/*
    window.addEventListener("scroll", ()=>{
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector(".press_bar").style.width = scrolled + "%";
    })
*/


let drop = document.querySelector(".drop");
let hamburger =document.querySelector(".hamburger");
let fa_bars=document.querySelector(".fa-bars"); 
drop.addEventListener("click",()=>{
    if(hamburger.style.display !="block"){
        drop.style.display ="block";
        hamburger.style.display="block";
        fa_bars.style.color="var(--pink)";
    }
    else{
        hamburger.style.display="none";
        fa_bars.style.color="white";
    }

})




