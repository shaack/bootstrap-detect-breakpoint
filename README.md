# bootstrap-detect-breakpoint

Detect the current Bootstrap 4 breakpoint in JavaScript.

## Usage

Include the `bootstrap-detect-breakpoint.js`.

```html
<script src="/src/bootstrap-detect-breakpoint.js"></script>
```

Get the current breakpoint with

```js
DetectBreakpoint.current() 
```
which will return an object with the current breakpoint name and index,
like this

```json
{
    "name": "lg",
    "index": 3
}
```

The index goes fro 0-4, where 0 is "xs" and 4 is "xl".
