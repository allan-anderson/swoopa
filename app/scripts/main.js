require.config({
  shim: {
  },

  paths: {
    app: 'app/',
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    waitForImages: 'vendor/jquery.waitforimages.min',
    tweenLite: 'vendor/gsap/TweenLite',
    tweenLiteCSS: 'vendor/gsap/plugins/CSSPlugin',
    tweenLiteEasePack: 'vendor/gsap/easing/EasePack'
  }
});
 
require(['app/intro'], function(intro) {
  intro.start();
});
