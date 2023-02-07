# `v-disable-focus-section`

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
