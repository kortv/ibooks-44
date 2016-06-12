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

    tl.staggerFrom(".os", 1.5, {
        autoAlpha: 0,
      scale: 0,
      ease: Back.easeOut
    }, 0.25)
    .staggerFrom(".stlb", 1.5, {
      scaleX: 0,
        autoAlpha: 0,
      transformOrigin: '0 0',
      ease: Back.easeOut
    }, 0.75, 1)
    .staggerFrom(".txt", 1 , {
      x: '-=50',
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.35, 1.9)
    .staggerFrom(".txty", 1 , {
      y: '-=100',
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5, 3.5)    
    .staggerFrom(".sts", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.3, 0.9)    
    .staggerFrom(".line", 3 , {
        autoAlpha: 0,
      scale: 0,
        transformOrigin: '0 100%',
      ease: Cubic.easeOut
    }, 0.35, 2.5)    
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
