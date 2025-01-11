# bootstrap-detect-breakpoint

Detect the current Bootstrap breakpoint in JavaScript.

## References

- [Demo page](https://shaack.com/projekte/bootstrap-detect-breakpoint/)
- [GitHub repository](https://github.com/shaack/bootstrap-detect-breakpoint)
- [npm package](https://www.npmjs.com/package/bootstrap-detect-breakpoint)

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

## Works in Bootstrap 4 and 5

In Bootstrap 5 prior 5.3 there is an [issue that the css variables for breakpoints are missing](https://github.com/twbs/bootstrap/issues/36094), which was fixed (by me) with version 5.3.

Up to version 5.3, you can use the bootstrap-detect-breakpoint script with Bootstrap 5 by simply adding the following to your scss
```scss
:root {
  @each $name, $value in $grid-breakpoints {
    --bs-breakpoint-#{$name}: #{$value};
  }
}
```

---

Find more high quality modules from [shaack.com](https://shaack.com)
on [our projects page](https://shaack.com/works).

