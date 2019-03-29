

TweenMax.fromTo(
    ".mabo-footer", 3, 
    {opacity: 0, delay: 1.5}, 
    {opacity: 0.9, delay: 1.5}
    );

/** videoheader parallax **/

TweenLite.from( "#header-logo", 2.5, {y:800, opacity: 0, ease: Circ.easeOut});

var parallaxScroll = new TimelineMax({paused:true});
parallaxScroll.to( '.logo-wrapper', 0.1, {y:-500, opacity: 0} )
    .to('.header-container', 0.1, {y:600, opacity: 0}, 0)
    .to('.img-fluid', 0.1, {y:50}, 0); 
 

var scrollMax = $(document).height() - $(window).height();

$(window).scroll( function(){
    var curScroll = $(window).scrollTop();
    //console.log( curScroll/scrollMax );
    if( curScroll > 0 ){
    parallaxScroll.progress( curScroll/scrollMax );
    }
})
    