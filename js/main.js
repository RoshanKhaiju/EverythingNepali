var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}


var bars = $(".bars");
var navItems = $("#nav-items");
var close = $("#close");

bars.click(function(){
    navItems.animate({
        "left":"0vw",
    },500);
});

close.click(function(){
    navItems.animate({
        "left":"-90vw",
    },500);
});


var card = $(".card");
card.mouseenter(function () {
    $(this).stop().css({
        "cursor": "pointer",
        "box-shadow": "0px 0px 20px 2px rgba(3,3,3,.2)",
        "transition": "all ease-in-out .3s",
    })
});
card.mouseleave(function(){
    $(this).css({
        "box-shadow": "none",
    })
});