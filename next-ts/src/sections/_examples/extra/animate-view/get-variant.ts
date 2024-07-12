import {
  varFade,
  varZoom,
  varFlip,
  varSlide,
  varScale,
  varBgPan,
  varBounce,
  varRotate,
  varBgColor,
  varBgKenburns,
} from 'src/components/animate';

// ----------------------------------------------------------------------

export function getVariant(variant = 'slideInUp', distance = 160) {
  return {
    // Slide
    slideInUp: varSlide({ distance }).inUp,
    slideInDown: varSlide({ distance }).inDown,
    slideInLeft: varSlide({ distance }).inLeft,
    slideInRight: varSlide({ distance }).inRight,
    slideOutUp: varSlide({ distance }).outUp,
    slideOutDown: varSlide({ distance }).outDown,
    slideOutLeft: varSlide({ distance }).outLeft,
    slideOutRight: varSlide({ distance }).outRight,
    // Fade
    fadeIn: varFade().in,
    fadeInUp: varFade({ distance }).inUp,
    fadeInDown: varFade({ distance }).inDown,
    fadeInLeft: varFade({ distance }).inLeft,
    fadeInRight: varFade({ distance }).inRight,
    fadeOut: varFade({ distance }).out,
    fadeOutUp: varFade({ distance }).outUp,
    fadeOutDown: varFade({ distance }).outDown,
    fadeOutLeft: varFade({ distance }).outLeft,
    fadeOutRight: varFade({ distance }).outRight,
    // Zoom
    zoomIn: varZoom({ distance: 80 }).in,
    zoomInUp: varZoom({ distance: 80 }).inUp,
    zoomInDown: varZoom({ distance: 80 }).inDown,
    zoomInLeft: varZoom({ distance: 240 }).inLeft,
    zoomInRight: varZoom({ distance: 240 }).inRight,
    zoomOut: varZoom().out,
    zoomOutLeft: varZoom().outLeft,
    zoomOutRight: varZoom().outRight,
    zoomOutUp: varZoom().outUp,
    zoomOutDown: varZoom().outDown,
    // Bounce
    bounceIn: varBounce().in,
    bounceInUp: varBounce().inUp,
    bounceInDown: varBounce().inDown,
    bounceInLeft: varBounce().inLeft,
    bounceInRight: varBounce().inRight,
    bounceOut: varBounce().out,
    bounceOutUp: varBounce().outUp,
    bounceOutDown: varBounce().outDown,
    bounceOutLeft: varBounce().outLeft,
    bounceOutRight: varBounce().outRight,
    // Flip
    flipInX: varFlip().inX,
    flipInY: varFlip().inY,
    flipOutX: varFlip().outX,
    flipOutY: varFlip().outY,
    // Scale
    scaleInX: varScale().inX,
    scaleInY: varScale().inY,
    scaleOutX: varScale().outX,
    scaleOutY: varScale().outY,
    // Rotate
    rotateIn: varRotate().in,
    rotateOut: varRotate().out,
    // Background
    kenburnsTop: varBgKenburns().top,
    kenburnsBottom: varBgKenburns().bottom,
    kenburnsLeft: varBgKenburns().left,
    kenburnsRight: varBgKenburns().right,
    panTop: varBgPan().top,
    panBottom: varBgPan().bottom,
    panLeft: varBgPan().left,
    panRight: varBgPan().right,
    color2x: varBgColor(),
    color3x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222'] }),
    color4x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10'] }),
    color5x: varBgColor({ colors: ['#19dcea', '#b22cff', '#ea2222', '#f5be10', '#3bd80d'] }),
  }[variant];
}
