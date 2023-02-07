# `v-focus-section`

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
