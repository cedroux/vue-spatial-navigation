# `v-focus`

A directive that make the element focusable.

The element with `v-focus` must under the element with `v-focus-section`, see [v-focus-section](#v-focus-section)

```html
<div v-focus>
  <div></div>
</div>
```

#### dynamic control

```html
<template>
  <div v-focus="focusable">
    <div></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        focusable: false,
      };
    },
    methods: {
      changeFocusable() {
        this.focusable = !this.focusable;
      },
    },
  };
</script>
```

## Button click

Button action - Will be triggered by both enter key & mouse click \
[Events documentation](https://github.com/Syncronet-APS/vue-js-spatial-navigation/blob/master/docs/v-focus-events.md)

```html
<template>
  <div v-focus v-focus-events="{ 'enter-up': myFunction }">Click me</div>
</template>

<script>
  export default {
    methods: {
      myFunction() {
        console.log("Clicked");
      },
    },
  };
</script>
```
