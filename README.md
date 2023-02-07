# vue-spatial-nav

![npm](https://img.shields.io/npm/v/vue-spatial-nav?style=flat-square)

Forked from [Syncronet-APS/zome-vjsn](https://github.com/Syncronet-APS/zome-vjsn) and [spacerefugee/vue-js-spatial-navigation](https://github.com/spacerefugee/vue-js-spatial-navigation) \
Original author [luke-chang](https://github.com/luke-chang/js-spatial-navigation)

### Updated to be compatible with Vue3

- Added mouse support
- Added enter-up trigger click on focused element
- Added directive 'v-focus-events' for spatial navigation custom events

Vue directive of [js-spatial-navigation](https://github.com/luke-chang/js-spatial-navigation);

### Goal

Our goal is to have a library containing the tools you need to create a tv app with Vue for all tv platforms possible. \
At the moment we have only tested on WebOS & Tizen, we will expand to tvOS & AndroidTV later.

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

A global Vue instance property for [SpatialNavigation](https://github.com/luke-chang/js-spatial-navigation#api-reference);

You can access SpatialNavigation in every instance
```ts
this.$SpatialNavigation;
```

or with the inject() function
```vue
<script setup>
import { inject } from 'vue'

const spatialNavigation = inject('spatialNavigation');
</script>
```

### [`v-focus`](docs/v-focus.md)

### [`v-focus-events`](docs/v-focus-events.md)

### [`v-focus-section`](docs/v-focus-section.md)

### [`v-disable-focus-section`](docs/v-disable-focus-section.md)

## TODO

### Go through commits on

- https://www.npmjs.com/package/@smart-powers/js-spatial-navigation
  - remove iife
  - replace remaining var to let/const
  - replace 'extend' functino to spread operator
  - for in => Object.keys().forEach
  - etc... -> There is a lot of different things that is worth taking a look at
- https://github.com/alex2844/js-spatial-navigation
  - add function SpatialNavigation.getSections
  - add function SpatialNavigation.move && SpatialNavigation.getSections
  - contextmenu -> wtf even is this
  - fix double load script -> guard clause so it dosnt init twice
- https://github.com/germboy/js-spatial-navigation
  - Add container enable/disable support -> is section disable faulty?
  - verify next navigable elem before assigning next section id
- https://github.com/djtsov/js-spatial-navigation !important
  - Fixed transition from one section to other -> is the current faulty?
  - Added getSections() public function
  - Prevent select already focused element
  - Added focusDelay parameter & Update spatial_navigation.js
- https://github.com/exozet/js-spatial-navigation
  - Add new option to be able to ignore inner dimensions check
  - Change ignoreInnerDimensionValidator to ignoreInnerDimensionValidation
  - Add test case file for the offset dimensions offset issue
- https://github.com/egehandulger/js-spatial-navigation
  - Feature/custom key mapping
  - Typescript support
  - Fix/direction
  - Fix checking event key and keyCode values
- https://github.com/pertsim/js-spatial-navigation
  - Added direction dependent enter to capabilities and corresponding dem…
- https://github.com/miniArray/js-spatial-navigation
  - update -> looks like a keyboard / mouse input switch
- https://github.com/kevinhassan/js-spatial-navigation
  - -> just converted the project into typescript
- https://github.com/justinbeatz/vue-js-spatial-navigation
  - Update scroll-behavior-polyfill bug for old browsers
  - Update repository for scroll-behavior-polyfill
