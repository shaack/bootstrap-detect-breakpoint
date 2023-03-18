# bootstrap-detect-breakpoint

Detect the current Bootstrap breakpoint in JavaScript.

- [Demo Page](https://shaack.com/projekte/bootstrap-detect-breakpoint/)
- [npm Package](https://www.npmjs.com/package/bootstrap-detect-breakpoint)

## Usage

Include the `bootstrap-detect-breakpoint.js`.

```html
<script src="/src/bootstrap-detect-breakpoint.js"></script>
```

Get the current breakpoint with

```js
var currentBreakpoint = bootstrapDetectBreakpoint() 
```
which will return an object with the current breakpoint name and index,
like this

```json
{
    "name": "lg",
    "index": 3
}
```

The index goes from 0 to 5, where 0 is "xs" and 5 is for "xxl".

## Get it working with Bootstrap 5

In Bootstrap 5 there is an [issue that the css variables for breakpoints are missing](https://github.com/twbs/bootstrap/issues/36094). I already created a [pull request](https://github.com/twbs/bootstrap/pull/36095), and it will be merged with version 5.3. 🥳

Up to version 5.3, you can use the bootstrap-detect-breakpoint script with Bootstrap 5 by simply adding the following to your scss
```scss
:root {
  @each $name, $value in $grid-breakpoints {
    --bs-breakpoint-#{$name}: #{$value};
  }
}
```


