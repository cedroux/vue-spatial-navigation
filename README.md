# vue-js-spatial-navigation [![npm version](http://img.shields.io/npm/v/vue-js-spatial-navigation.svg?style=flat)](https://npmjs.org/package/vue-js-spatial-navigation "View this project on npm")

Forked from [spacerefugee](https://github.com/spacerefugee/vue-js-spatial-navigation)

### Updated to be compatible with Vue3

- Added mouse support
- Added enter key up trigger @click event

Vue directive of [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation);

## Installation

### NPM

```shell
    npm install vue-js-spatial-navigation
```

## Getting Started

```javascript
import Vue from "vue";
import vjsn from "vue-js-spatial-navigation";

Vue.use(vjsn);
```

#### Optional global [Configuration](https://github.com/luke-chang/js-spatial-navigation#configuration)

#### Additional configuration `scrollOptions`:

- The page will auto scroll to the focus element by using [`scrollIntoView`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

- You can set this `scrollOptions` for the `scrollIntoViewOptions`.

- The page will not scroll to the focus element when setting `scrollOptions` to `""` or `null`.

```javascript
const config = {
  straightOnly: false,
  straightOverlapThreshold: 0.5,
  rememberSource: false,
  disabled: false,
  defaultElement: "",
  enterTo: "",
  leaveFor: null,
  restrict: "self-first",
  tabIndexIgnoreList:
    "a, input, select, textarea, button, iframe, [contentEditable=true]",
  navigableFilter: null,
  scrollOptions: { behavior: "smooth", block: "center" },
};
Vue.use(vjsn, config);
```

## Documentation

### `$SpatialNavigation`

A global Vue instance property for [SpatialNavigation](https://github.com/luke-chang/js-spatial-navigation#api-reference);

```javascript
// you can access SpatialNavigation in every instance
this.$SpatialNavigation;
```

### `v-focus`

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

Button action - Will be triggered by both enter key & mouse click

```html
<template>
  <div v-focus @click="myFunction">Click me</div>
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

### `v-focus-section`

A directive that define a focus [Section](https://github.com/luke-chang/js-spatial-navigation#spatialnavigationaddsectionid-config)

```html
<div v-focus-section>
  <div v-focus>
    <div></div>
  </div>
  <div v-focus>
    <div></div>
  </div>
</div>
```

#### Pass a specified section id

```html
<!-- section id -->
<div v-focus-section:my-section>
  <div v-focus></div>
</div>
```

#### Set configuration

```html
<!-- set configuration -->
<div v-focus-section:my-section="{enterTo:'last-focused'}">
  <div v-focus></div>
</div>
```

#### Set default section

```html
<!-- set default section -->
<div v-focus-section:my-section.default="{enterTo:'last-focused'}">
  <div v-focus></div>
</div>
```

### `v-disable-focus-section`

This directive will make the conponemt unnavigable.
See [SpatialNavigation.disable()](https://github.com/luke-chang/js-spatial-navigation#spatialnavigationdisablesectionid),
[SpatialNavigation.enable()](https://github.com/luke-chang/js-spatial-navigation#spatialnavigationenablesectionid).

```html
<div v-focus-section v-disable-focus-section="disable">
  <div v-focus></div>
</div>

<script>
  export default {
    data() {
      return {
        disable: false,
      };
    },
    methods: {
      changeDisable() {
        this.disable = !this.disable;
      },
    },
  };
</script>
```
