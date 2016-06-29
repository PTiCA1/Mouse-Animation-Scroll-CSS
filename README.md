# Mouse animation scroll for landing pages

![stack Overflow](https://github.com/PTiCA1/mouse-animation-scroll-css/blob/master/mouse-animation-scroll.gif)

## Instalation
```
git clone git://github.com/PTiCA1/mouse-animation-scroll-css.git
npm install
gulp --production
```
## HTML
### for mouse only
```
<div class="mouse center-block"></div>
```
### for mouse and arrow
```
<div class="mouse center-block"></div>
<div class="arrow-scroll center-block">
    <span></span>
    <span></span>
    <span></span>
</div>
```
## Development SCSS styles
```
gulp watch
```
### for change sizes
```
//for change size mouse
$mouse-size-height:                      50px !default;
$mouse-border-size:                      2px !default;
$mouse-color:                            #fff !default;

//for change size down arrow
$arrow-size:                             9px !default;
```
