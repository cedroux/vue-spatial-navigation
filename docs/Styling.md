# Focus styling

You can use a global style for focusable elements.

```scss
@use "sass:math";
$Focusable-Outline-Width: 4px;

.focusable {
  min-height: 54px;
  min-width: 54px;

  &--flat:focus {
    background-color: #d0d0d040;
  }

  &--border:focus {
    border: calc($Focusable-Outline-Width / 2) solid #fff;
  }

  &--outline:focus {
    outline: calc($Focusable-Outline-Width / 2) solid #fff;
  }

  &--icon:focus {
    background-color: #ffffff90;
    box-shadow: 0px 0px transparent;
  }
}
```

Then just import it in app.vue

```html
<style lang="scss">
  @import "@/components/Style/Focusable.scss";
</style>
```

Using it on elements

```html
<div v-focus class="focusable--outline">Click me</div>
```
