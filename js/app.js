$(function(){
    'use strict';


  $('.fixed-menuAgain .fa-chevron-righttt').on('click',function(){
    $(this).parent('.fixed-menuAgain').toggleClass('is-visible');
    if( $(this).parent('.fixed-menuAgain').hasClass('is-visible')) {
        $(this).parent('.fixed-menuAgain').animate({
            right: 0
        },500);
    }
    else{
        $(this).parent('.fixed-menuAgain').animate({
            right: '-244px',
        },500);
    }
  });
});

let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}



// document.addEventListener('scroll', function(e) {
//  var foot = Number .parseInt($('.footerF').css("height"));
//  var menu = Number .parseInt( $('.a7aaaaa').css("height"));
//  var menuTop = Number .parseInt( $('.a7aaaaa').css("top"));
//  var contact = Number .parseInt( $('.clsOne').css("height"));
//  var contactTop = Number .parseInt( $('.clsOne').css("top"));
//  var bod = Number .parseInt( $('body').css("height"));
//  var scroll = window.scrollY;

//  if( scroll + (menu + 94 + 25 ) > ( bod - foot )){
//     var x =  bod - ( scroll +  721.2) 
//     $(".a7aaaaa").css({"top":"unset" , "bottom":`${foot - x + 25 }px`} )
// }
//  if ( (scroll + contact + 300 + 25 ) > ( bod - foot )) {
//         var y =  bod - ( scroll +  721.2) 
//         $(".clsOne").css({"top":"unset" , "bottom":`${foot - y + 25 }px`} )
// }
//  if  ( scroll + menu + 102 + 25  < ( bod - foot )){ $(".a7aaaaa").css({"top":`94px` , "bottom":"unset"} ) }
//  if ( (scroll + contact + 447 + 25 ) < ( bod - foot )) { $(".clsOne").css({"top": `300px` , "bottom":"unset"} ) } 

// })







const $tabsToDropdown = $(".tabs-to-dropdown");

function generateDropdownMarkup(container) {
  const $navWrapper = container.find(".nav-wrapper");
  const $navPills = container.find(".nav-pills");
  const firstTextLink = $navPills.find("li:first-child a").text();
  const $items = $navPills.find("li");
  const markup = `
    <div class="dropdown d-md-none">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${firstTextLink}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
        ${generateDropdownLinksMarkup($items)}
      </div>
    </div>
  `;
  $navWrapper.prepend(markup);
}

function generateDropdownLinksMarkup(items) {
  let markup = "";
  items.each(function () {
    const textLink = $(this).find("a").text();
    markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
  });

  return markup;
}

function showDropdownHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const $dropdownToggle = $this.find(".dropdown-toggle");
  const dropdownToggleText = $dropdownToggle.text().trim();
  const $dropdownMenuLinks = $this.find(".dropdown-menu a");
  const dNoneClass = "d-none";
  $dropdownMenuLinks.each(function () {
    const $this = $(this);
    if ($this.text() == dropdownToggleText) {
      $this.addClass(dNoneClass);
    } else {
      $this.removeClass(dNoneClass);
    }
  });
}

function clickHandler(e) {
  e.preventDefault();
  const $this = $(this);
  const index = $this.index();
  const text = $this.text();
  $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
  $this
    .closest($tabsToDropdown)
    .find(`.nav-pills li:eq(${index}) a`)
    .tab("show");
}

function shownTabsHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const index = $this.parent().index();
  const $parent = $this.closest($tabsToDropdown);
  const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
  const targetDropdownLinkText = $targetDropdownLink.text();
  $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
}

$tabsToDropdown.each(function () {
  const $this = $(this);
  const $pills = $this.find('a[data-toggle="pill"]');

  generateDropdownMarkup($this);

  const $dropdown = $this.find(".dropdown");
  const $dropdownLinks = $this.find(".dropdown-menu a");

  $dropdown.on("show.bs.dropdown", showDropdownHandler);
  $dropdownLinks.on("click", clickHandler);
  $pills.on("shown.bs.tab", shownTabsHandler);
});

var exitButton = $(".exit")
var exit = $(".clsOne")


exitButton.on("click" , ()=> exit.remove() )


var first =   $('.a7aaaaa')
var second =   $('.over')


window.onload = function(){
  
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

}









window.addEventListener("resize", function() {
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


kama.on("click" , ()=>{ forLista.css("display" , "block") })
lista.on("click" , ()=>{ forLista.css("display" , "none")})




var toggleMobileMenu = $('.stat')
var Menu = $('.menu')






toggleMobileMenu.on("click", ()=> Menu.toggleClass("show"))


$(".lang").on("click", ()=> $(".dark").toggleClass("showLang"))
$(".lang-over li").on("click", ()=> $(".dark").toggleClass("showLang"))


