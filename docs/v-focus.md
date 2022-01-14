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

Button action - Will be triggered by both enter key & mouse click

```html
<template>
  <div v-focus v-sn-event="{ 'enter-up': myFunction }>Click me</div>
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

## Preventing navigation

Some events can be cancelled, like [sn:willmove](https://github.com/luke-chang/js-spatial-navigation#snwillmove).
The following example cancels the navigation if its trying to navigate up from the `no` element.

```html
<template>
  <div
    v-focus
    id="hi"
    v-sn-event="{ willmove: print }"
    class="focusable--outline"
  >
    hi
  </div>
  <div
    v-focus
    id="no"
    v-sn-event="{ willmove: stopUp }"
    class="focusable--outline"
  >
    no
  </div>
</template>

<script>
  export default {
    methods: {
      print(event) {
        console.log(event);
      },
      stopUp(event) {
        console.log(event);
        if (event.detail.direction == "up") event.preventDefault();
      },
    },
  };
</script>
```

Original documentation can be found here: https://github.com/luke-chang/js-spatial-navigation#events \
Just notice that this wrapper library prefixes events with `sn:` so you wont have to define this. \
Available events

<ol>
  <li>willmove</li>
  <li>willunfocus</li>
  <li>unfocused</li>
  <li>willfocus</li>
  <li>focused</li>
  <li>navigatefailed</li>
  <li>enter-down</li>
  <li>enter-up </li>
</ol>
Be aware that using enter-down can trigger the event multiple times when holding down the button. \
It is recommended to use enter-down/enter-up as button clicks. \
You still have the option to use vue's event handling for key input: https://v3.vuejs.org/guide/events.html#key-modifiers

All events with `v-sn-event` are registered with `mounted`. Meaning all events has to be registred at that time. The guard cases for those events has to be handled inside those events. They will always be fired no matter what.\
If you want to be able to actually remove & re-add event listeners, you have to manually add the events as descriped in the original documentation for js-spatial-navigation.
