// TOGGLE MENU START =============================================================================

const menuBtn = document.querySelector('#menu');
const section = document.querySelector('#toggle');


menuBtn.onclick = ()=>{
    if (section.style.display === "none") {
        section.style.display = "block";
    }else{
        section.style.display = "none";
    }
}





const closeBtn = document.querySelector('#close');

closeBtn.onclick = ()=>{
    if (section.style.display === "block") {
        section.style.display = "none";
    }else{
        section.style.display = "block";
    }
}


// TOGGLE MENU END =============================================================================





// BACK TO TOP BUTTON  START ==========================================================================

const mybutton = document.querySelector("#myBtn");




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



// BACK TO TOP BUTTON  START ==========================================================================




// DAY - NIGHT MODE START =============================================================================

const header = document.querySelector('header');
const modeBtn = document.querySelector('#mode');
const sec1 = document.querySelector('#sec1');
const sec2 = document.querySelector('#sec2');
const div = document.querySelector('#linebox');
const footer = document.querySelector('footer');

modeBtn.onclick = ()=>{
    if (header.className === "light") {
        localStorage.setItem('mode','dark');
        header.className=localStorage.getItem('mode'),sec1.className=localStorage.getItem('mode'),sec2.className=localStorage.getItem('mode'),div.className=localStorage.getItem('mode'),footer.className=localStorage.getItem('mode');
        modeBtn.innerHTML = "☀️";
    }else{
        localStorage.setItem('mode','light');v
        header.className=localStorage.getItem('mode'),sec1.className=localStorage.getItem('mode'),sec2.className=localStorage.getItem('mode'),div.className=localStorage.getItem('mode'),footer.className=localStorage.getItem('mode');
        modeBtn.innerHTML = "<i class=\"fa-solid fa-moon\"></i> ";
    }
}

header.className=localStorage.getItem('mode'),sec1.className=localStorage.getItem('mode'),sec2.className=localStorage.getItem('mode'),div.className=localStorage.getItem('mode'),footer.className=localStorage.getItem('mode');



// DAY - NIGHT MODE END ==============================================================================





// MULTI LANG START =================================================================================

const langNav = document.querySelectorAll('.multinav');
const langBtn = document.querySelector('#lang');


 let navAz = ["HAMISI","VEB","REKLAM","BRENDING","DiZAYN","FOTOQRAFİYA"];
 let navEn = ["ALL","WEB","ADVERTISING","BRANDING","DESIGN","PHOTOGRAPHY"];
 
 const multiLang = ()=>{
     if (langBtn.innerHTML === "AZ") {
         for (let index = 0; index < navAz.length; index++) {
             langNav[index].innerHTML = navAz[index];
             langBtn.innerHTML = "EN";
         }
     }else{
         for (let index = 0; index < navEn.length; index++) {
             langNav[index].innerHTML = navEn[index];
             langBtn.innerHTML = "AZ";
         }
     }
 }

 langBtn.onclick = multiLang;


// MULTI LANG END ===================================================================================