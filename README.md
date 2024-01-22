# Vue Spatial Navigation

[![npm](https://img.shields.io/npm/v/vue-spatial-nav?style=flat-square)](https://www.npmjs.com/package/vue-spatial-nav)

Forked from [Syncronet-APS/zome-vjsn](https://github.com/Syncronet-APS/zome-vjsn) and [spacerefugee/vue-js-spatial-navigation](https://github.com/spacerefugee/vue-js-spatial-navigation) \
Original author [luke-chang](https://github.com/luke-chang/js-spatial-navigation)

### Vue directive of [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation)

- Compatible with Vue3
- Added mouse support
- Added enter-up trigger click on focused element
- Added directive 'v-focus-events' for spatial navigation custom events
- Added TS declarations

### Goal

Our goal is to have a library containing the tools you need to create a TV app with Vue for all platforms possible. \
The library has been tested on WebOS, Tizen and Android TV.

## Contribution

Feel free to open issues/pull requests. \
We are open to new features & changes. \
We are willing to answer questions.

## Installation

### NPM

```shell
npm install vue-spatial-nav
```

## Getting Started

```ts
import vueSpatialNavigation from 'vue-spatial-nav';

app.use(vueSpatialNavigation);
```

#### Optional global [Configuration](https://github.com/luke-chang/js-spatial-navigation#configuration)

#### Additional configuration `scrollOptions`:

- The page will auto scroll to the focus element by using [`scrollIntoView`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

- You can set this `scrollOptions` for the `scrollIntoViewOptions`.

- The page will not scroll to the focus element when setting `scrollOptions` to `''` or `null`.

```ts
import vueSpatialNavigation from 'vue-spatial-nav';

const globalConfig = {
  straightOnly: false,
  straightOverlapThreshold: 0.5,
  rememberSource: false,
  disabled: false,
  defaultElement: '',
  enterTo: '',
  leaveFor: null,
  restrict: 'self-first',
  tabIndexIgnoreList: 'a, input, select, textarea, button, iframe, [contentEditable=true]',
  navigableFilter: null,
  scrollOptions: {
    behavior: 'smooth',
    block: 'center',
  },
};

Vue.use(vueSpatialNavigation, globalConfig);
```

## Documentation

### Global SpatialNavigation instance

A global Vue instance property for [SpatialNavigation](https://github.com/luke-chang/js-spatial-navigation#api-reference)

You can access SpatialNavigation in every instance
```ts
this.$SpatialNavigation;
```

or with the inject() function
```vue
<script setup>
import { inject } from 'vue';

const spatialNavigation = inject('spatialNavigation');
</script>
```

### [`v-focus`](docs/v-focus.md)

### [`v-focus-events`](docs/v-focus-events.md)

### [`v-focus-section`](docs/v-focus-section.md)

### [`v-disable-focus-section`](docs/v-disable-focus-section.md)

