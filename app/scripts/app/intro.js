define(['jquery', 'waitForImages', 'tweenLite', 'tweenLiteCSS', 'tweenLiteEasePack'], function($, waitForImages, tweenLight) {

  intro = {}
  intro.options = {
    viewPortSelector: "#viewport",
    panelSelector: ".panel",
    slideOverSelector: ".over-container",
    animationClasses: "animated fade-in-left"
  }
  intro.start = function(){
    $(intro.options.viewPortSelector).waitForImages(function(){
      intro.fadePanel(
        $(intro.options.panelSelector).first()
      );
    });
  }

  intro.fadePanel = function(panel) {
    var $panel = $(panel);
    fadeIn = new TweenLite(
      $panel, 
      1.5, 
      { 
        css: { opacity: 1 }, 
        ease: Expo.easeInOut,
        paused: true
      }
    );
    fadeIn.resume();
    fadeIn.eventCallback("onComplete", nextStep);
    function nextStep() {
      this.kill();
      intro.slidePanel($panel.find(intro.options.slideOverSelector));
    }
    //panel.fadeIn(700, function(){
      //intro.slidePanel(panel.find(intro.options.slideOverSelector));
    //});
  }

  intro.slidePanel = function(panel) {
    var slideIn = new TweenLite(
      panel, 
      0.3, 
      { 
        css: { left: 0 }, 
        delay: 0.2,
        ease: Expo.easeOut,
        paused: true  
      }
    );

    slideIn.resume();
    slideIn.eventCallback("onComplete", nextStep);

    function nextStep(){
      var $nextPanel = $(panel).parents(intro.options.panelSelector).next();
      if( $nextPanel.length ) {
        slideIn.kill();
        intro.fadePanel($nextPanel)
      }
    }
  }



  return intro; 
});
