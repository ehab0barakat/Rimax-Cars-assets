
let span = document.querySelector(".upTop");
window.onscroll = function (){
  this.scrollY >= 500 ? span.classList.add("showUp") : span.classList.remove("showUp")
};
span.onclick = function (){
window.scrollTo({
  top: 0,
  behavior: "smooth",
});
}



var exitButton = $(".exit")
var exit = $(".clsOne")


exitButton.on("click" , ()=> exit.remove() )


var first =   $('.a7aaaaa')
var second =   $('.over')


$("document").ready( function(){
  
  var width = document.body.clientWidth ;
  var margin = (width - 1725 ) / 2  ;
  var margX2 = width - 1400   ;
  
  $(".stand").css("width" ,`${$(".ww").css("width")}`) ;
  
  
  if ( width > 1725 ){
    first .css("margin-right",`${margin}px`)
    second .css("margin-right",`${margin}px `)
    $(".lang-over").css("left",`${260 + 325 + margin }px`)
  } ;

  if (  width < 1725 ){
    first .css("margin-right",`unset`)
    second .css("margin-right",`unset `)
  };


  if (  width > 1400 && width < 1725  ){
    $(".lang-over").css("left",`${260 + margX2}px`)
  };


  if (  width < 1400 ){
    $(".lang-over").css("left",`260px`)
  };

})


window.addEventListener(["resize" , "load" ], function() {
  var width = document.body.clientWidth ;
  var margin = (width - 1725 ) / 2  ;
  var margX2 = width - 1400   ;
  
  $(".stand").css("width" ,`${$(".ww").css("width")}`) ;
  
  
  if ( width > 1725 ){
    first .css("margin-right",`${margin}px`)
    second .css("margin-right",`${margin}px `)
    $(".lang-over").css("left",`${260 + 325 + margin }px`)
  } ;

  if (  width < 1725 ){
    first .css("margin-right",`unset`)
    second .css("margin-right",`unset `)
  };


  if (  width > 1400 && width < 1725  ){
    $(".lang-over").css("left",`${260 + margX2}px`)
  };


  if (  width < 1400 ){
    $(".lang-over").css("left",`260px`)
  };



})






var kama = $('.kama')
var lista = $('.lista')
var forLista = $('.okk')
var forKama = $(".ok")

kama.on("click" , ()=>{ 
  forLista.addClass("change");
  forKama.removeClass("change");
})

lista.on("click" , ()=>{ 
  forKama.addClass("change");
  forLista.removeClass("change");
});




var toggleMobileMenu = $('.stat')
var Menu = $('.menu')
var xButton = $('.menu .exitt i')
var dd = $('.dd')

toggleMobileMenu.on("click", ()=> Menu.toggleClass("show"))
xButton.on("click", ()=> Menu.toggleClass("show"))
dd.on("click", ()=> Menu.toggleClass("show"))



$(".lang").on("click", ()=> $(".dark").addClass("showLang"))
$(".lang-over li").on("click", ()=> $(".dark").removeClass("showLang"))
$(".dark").on("click", ()=> $(".dark").removeClass("showLang")) 



$(".fu-search").on("click", ()=> {
    $(".shit").addClass("in");
    $(".shit input").focus(); 
}) 

$(".exitttt").on("click", ()=> $(".shit").removeClass("in")) 

