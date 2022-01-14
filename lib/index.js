import SpatialNavigation, { EVENT_PREFIX } from "./spatial_navigation.js";

const vueSpatialNavigation = {
  install(Vue, config) {
    const globalConfig = {
      selector: `[data-focusable=true]`,
    };
    Object.assign(globalConfig, config);
    SpatialNavigation.init();
    SpatialNavigation.set(globalConfig);
    // Vue.prototype.$SpatialNavigation = SpatialNavigation;
    Vue.config.globalProperties.$SpatialNavigation = SpatialNavigation;

    const assignConfig = (sectionId, config) => {
      let sectionConfig = Object.assign({}, globalConfig);
      if (config) {
        Object.assign(sectionConfig, config);
      }
      sectionConfig.selector = `[data-section-id="${sectionId}"] [data-focusable=true]`;
      return sectionConfig;
    };

    // focus section directive
    Vue.directive("focus-section", {
      beforeMount(el, binding) {
        let sectionId = null;
        if (binding.arg) {
          sectionId = binding.arg;
          try {
            SpatialNavigation.add(sectionId, {});
          } catch (error) {
            console.error(error);
          }
        } else {
          sectionId = SpatialNavigation.add({});
        }

        // set sectionid to data set for removing when unbinding
        el.dataset.sectionId = sectionId;
        SpatialNavigation.set(
          sectionId,
          assignConfig(sectionId, binding.value)
        );
        // set default section
        if (binding.modifiers.default) {
          SpatialNavigation.setDefaultSection(sectionId);
        }
      },
      updated(el, binding) {
        let sectionId = el.dataset.sectionId;
        if (binding.arg && sectionId != binding.arg) {
          sectionId = binding.arg;
          el.dataset.sectionId = sectionId;
        }
        if (binding.value) {
          try {
            SpatialNavigation.set(sectionId, binding.value);
          } catch (error) {
            SpatialNavigation.add(
              sectionId,
              assignConfig(sectionId, binding.value)
            );
          }
        }
      },
      unmounted(el) {
        SpatialNavigation.remove(el.dataset.sectionId);
      },
    });

    const disableSection = (sectionId, disable) => {
      if (disable == false) {
        SpatialNavigation.enable(sectionId);
      } else {
        SpatialNavigation.disable(sectionId);
      }
    };
    // diasble focus section directive
    Vue.directive("disable-focus-section", {
      beforeMount(el, binding) {
        disableSection(el.dataset.sectionId, binding.value);
      },
      updated(el, binding) {
        disableSection(el.dataset.sectionId, binding.value);
      },
    });

    const disableElement = (el, focusable) => {
      focusable = focusable == false ? false : true;
      if (!el.dataset.focusable || el.dataset.focusable != focusable + "") {
        el.dataset.focusable = focusable;
        if (focusable) el.tabIndex = -1;
      }
    };
    // focusable directive
    Vue.directive("focus", {
      beforeMount(el, binding) {
        disableElement(el, binding.value);
      },
      mounted(el, binding) {
        el.addEventListener("mouseenter", function () {
          SpatialNavigation.focus(el);
        });
      },
      updated(el, binding) {
        disableElement(el, binding.value);
      },
      unmounted(el) {
        el.removeAttribute("data-focusable");
      },
    });

    // It can be expensive to check through this list for every events registered for every button.
    // With typescript this could be done with typedefinition
    const EVENTS = [
      "willmove",
      "willunfocus",
      "unfocused",
      "willfocus",
      "focused",
      "navigatefailed",
      "enter-down",
      "enter-up",
    ];

    // At some point we might need the handling of what happens with eventlistener when the binding is updated.
    // This might also be split into different directives to handle remove eventlisteners
    Vue.directive("focus-events", {
      mounted(el, binding) {
        Object.keys(binding.value).forEach((key, i) => {
          if (EVENTS.includes(key))
            el.addEventListener(EVENT_PREFIX + key, binding.value[key]);
        });
      },
    });
  },
};

export default vueSpatialNavigation;
