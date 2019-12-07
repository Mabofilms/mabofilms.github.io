TweenMax.fromTo(
  ".mabo-footer",
  3,
  { opacity: 0, delay: 1.5 },
  { opacity: 0.9, delay: 1.5 }
);

/** videoheader parallax **/

TweenLite.from("#header-logo", 2.5, { y: 800, opacity: 0, ease: Circ.easeOut });

var parallaxScroll = new TimelineMax({ paused: true });
parallaxScroll
  .to(".logo-wrapper", 0.1, { y: -100, opacity: 0 })
  .to(".header-container", 0.1, { y: 200, opacity: 0 }, 0)
  .to(".gallery", 0.1, { y: -300 }, 0);
//.to('.img-fluid', 0.1, {y:50}, 0);

var scrollMax = $(document).height() - $(window).height();

$(window).scroll(function() {
  var curScroll = $(window).scrollTop();
  //console.log( curScroll/scrollMax );
  if (curScroll >= 0) {
    parallaxScroll.progress(curScroll / scrollMax);
  }
  console.log(curScroll);
});

//HOVER ON THUMBNAILS

var galThumbs = document.getElementsByClassName("video-btn");

for (var i = galThumbs.length; i--; ) {
  galThumbs[i].animationIn = TweenLite.to("#" + galThumbs[i].id, 2, {
    opacity: 0.9
  });
  //galThumbs[i].animationOut = TweenLite.to("#" + galThumbs[i].id, 3, {opacity: 0.5});
  galThumbs[i].addEventListener("mouseover", AnimPlayIn);
  //galThumbs[i].addEventListener('mouseout', AnimPlayOut );
}

function AnimPlayIn(e) {
  var anim = e.target.animationIn;
  //if( !anim.isActive()) {
  e.target.animationIn.play(0);
  //}
}

function AnimPlayOut(e) {
  var anim = e.target.animationIn;
  //if( !anim.isActive()) {
  e.target.animationOut.play(0);
  //}
}

/*
var galThumb = document.getElementsByClassName("video-btn");
for ( var i = 0 ; i < galThumb.length; i++){
    console.log("test", galThumb[i].id);
    galThumb[i].addEventListener(
        "mouseover", 
        thumbAnimover("#" + galThumb[i].id)
    );

    galThumb[i].addEventListener(
        "mouseout",     
        TweenMax.to("#" + galThumb[i].id, 0.6, {
            opacity: 0.1
        })
    );
}

function thumbAnimover(e) {
    var tl = new TimelineMax({paused: true});
    tl.TweenMax.to(e, 0.6, {
        opacity: 0.5
    })
}

function onHoverOver(e){
  TweenMax.to( galThumb, 0.6, {
    opacity: 1
    });
}

function onHoverOut(e){
    TweenMax.to( galThumb, 0.6, {opacity:0.7} );
} */
