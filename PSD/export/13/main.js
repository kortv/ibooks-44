var tl = new TimelineMax();

var wraper = document.querySelector("#wraper");

function shaker (){
  wraper.className = "animated05 shake";
  setTimeout(function(){
    wraper.className = "";
  },1000);
}
var shakerInt = setInterval(shaker, 3000);

var clicked = true;
function animation (e){
  if (clicked){
    clearInterval(shakerInt);
    TweenMax.to( wraper, 1,{
      autoAlpha: 0,
    });

    clicked = false;

    tl.staggerFrom(".c", 1, {
      y: '-=100',
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5)
    .staggerFrom(".str", 1 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 0.25)
    .staggerFrom(".z", 0.6 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.15, 2.5)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
