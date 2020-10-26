# shifty
Simple JavaScript Library to add parallax image to `background-image`

## Demo

demo page is [here](https://wgalyen.github.io/shifty)

## Usage

If you want to add parallax effect to element's background-image

```html
<div class="js-parallax parallax" 
     data-img="./path/to/default-image"
     data-img-768="./path/to/image-which-size-is-larger-than-768"
     data-img-1024="./path/to/image-which-size-is-larger-than-1024"
>
  <p>Test</p>
</div>
```

```js
import Shifty from 'shifty';

new Shifty('.js-parallax');
```
