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

    tl.staggerFrom(".cr", 1, {
      x: '-=100',
      autoAlpha: 0,
      transformOrigin: '0 0',
      ease: Back.easeOut
    }, -0.25)
    .staggerFrom(".c", 1, {
      y: '-=100',
      autoAlpha: 0,
      transformOrigin: '0 0',
      ease: Back.easeOut
    }, -0.35, 1)
    .staggerFrom(".st", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, -0.35, 0.9)
    .staggerFrom(".sts", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.3, 3.9)
    .staggerFrom(".line", 0.4 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, -0.35, 2.5)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
