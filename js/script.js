
const bodyDoc = document.querySelector('body');
let burgerBtn = document.querySelector('.burger');
let burgerBtnSpan = burgerBtn.querySelector('.burger span');
let menuBurger = document.querySelector('.menu-burger');
const scrolBtn = document.querySelector('.logo');
const btnX = document.querySelector('.btn-scroll');

burgerBtn.addEventListener('click', (e) => {
    menuBurger.classList.toggle('active');
    burgerBtnSpan.classList.toggle('activated');
    bodyDoc.classList.toggle('locked');
});

const arr = [scrolBtn,btnX];

function scroll(el){
    el.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault;
            (function smoothscroll(){
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                     window.requestAnimationFrame(smoothscroll);
                     window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            })();
        });
    });
}
scroll(arr);


var lastScrollTop = 0;


window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
        btnX.classList.remove('showed');
   } else {
        btnX.classList.add('showed');
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);

