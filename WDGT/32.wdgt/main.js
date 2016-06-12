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
      x: '-=100',
      autoAlpha: 0,
      transformOrigin: '0 0',
      ease: Back.easeOut
    }, 0.5)
    .staggerFrom(".st", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.25, 0.5)    
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
