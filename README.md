# Mouse animation scroll for landing pages

![stack Overflow](https://github.com/PTiCA1/mouse-animation-scroll-css/blob/master/mouse-animation-scroll.gif)

## Instalation
```
git clone git://github.com/PTiCA1/Mouse-Animation-Scroll-CSS.git
npm install
gulp --production
```
## HTML
### for mouse only
```html
<div class="mouse center-block"></div>
```
### for mouse and arrow
```html
<div class="mouse"></div>
<div class="arrow-scroll">
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Development SCSS styles
```
gulp watch
```

### for change size and color
SCSS file ./scss/main.scss
```scss
//for change size mouse
$mouse-size-height:               50px !default;
$mouse-border-size:               2px !default;
$mouse-color:                     #fff !default;

//for change size down arrow
$arrow-size:                      9px !default;
```
```
gulp --production
```

### Tested
Tested on IE10 + with animations. On IE9 and older without animation.
For other browsers such as Safari, Chrome, Firefox without problems in the last two versions.

### Online preview
Online preview on [Codepen.io](http://codepen.io/PTiCA1/pen/vKxVME).

