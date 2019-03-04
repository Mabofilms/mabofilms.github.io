

TweenMax.fromTo(
    "#header-list-id", 3, 
    {opacity: 0, delay: 1.5}, 
    {opacity: 0.3, delay: 1.5}
    );

/** videoheader parallax **/
TweenLite.from(
    "#header-logo", 2.5, 
    {y:800, opacity: 0, ease: Circ.easeOut});    

var parallaxScroll = new TimelineMax({paused:true});
parallaxScroll.to( '#logo-wrapper , #header-list-id', 0.1, {y:400, opacity: 0} );

var scrollMax = $(document).height() - $(window).height();
$(window).scroll( function(){
    var curScroll = $(window).scrollTop();
    //console.log( curScroll/scrollMax );
    if( curScroll > 0 ){
    parallaxScroll.progress( curScroll/scrollMax );
    }
})
    
/*
TweenMax.fromTo("#hue1feGaussianBlur", 10, {
    attr:{"stdDeviation":10, repeat: -1},
});
    
    */

var blurtimeline = new TimelineLite();
    blurtimeline.to("#logo-blur", 0.2, {
        delay: 2,
        attr:{"stdDeviation":1.5}})
    .to("#logo-blur", 0.2, {
            attr:{"stdDeviation":0.5}})
    .to("#logo-blur", 6, {
        attr:{"stdDeviation":0},
            ease: RoughEase.ease.config({ 
            template:  Power0.easeNone, 
            strength: 3, 
            points: 20, 
            taper: "none", 
            randomize:  true, 
            clamp: false})}
    )
    ;
