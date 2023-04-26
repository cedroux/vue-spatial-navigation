import type { DirectiveBinding } from 'vue';
import SpatialNavigation, { EVENT_PREFIX } from './spatial_navigation';
import type { vjsnOptions } from './options';

const vueSpatialNavigation = {
  install(vue: any, config: vjsnOptions) {
    const globalConfig = {
      selector: `[data-focusable=true]`,
    };
    Object.assign(globalConfig, config);
    SpatialNavigation.init();
    SpatialNavigation.set(globalConfig);

    vue.config.globalProperties.$SpatialNavigation = SpatialNavigation;
    vue.provide('spatialNavigation', SpatialNavigation);

    const assignConfig = (sectionId: string | undefined, config: object) => {
      let sectionConfig = Object.assign({}, globalConfig);
      if (config) {
        Object.assign(sectionConfig, config);
      }
      sectionConfig.selector = `[data-section-id="${sectionId}"] [data-focusable=true]`;
      return sectionConfig;
    };

    // focus section directive
    vue.directive('focus-section', {
      beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        let sectionId: string;
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
          assignConfig(sectionId, binding.value),
        );
        // set default section
        if (binding.modifiers.default) {
          SpatialNavigation.setDefaultSection(sectionId);
        }
      },
      updated(el: HTMLElement, binding: DirectiveBinding) {
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
              assignConfig(sectionId, binding.value),
            );
          }
        }
      },
      unmounted(el: HTMLElement) {
        SpatialNavigation.remove(el.dataset.sectionId);
      },
    });

    const disableSection = (sectionId: string | undefined, disable: boolean) => {
      if (disable == false) {
        SpatialNavigation.enable(sectionId);
      } else {
        SpatialNavigation.disable(sectionId);
      }
    };
    // diasble focus section directive
    vue.directive('disable-focus-section', {
      beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        disableSection(el.dataset.sectionId, binding.value);
      },
      updated(el: HTMLElement, binding: DirectiveBinding) {
        disableSection(el.dataset.sectionId, binding.value);
      },
    });

    const disableElement = (el: HTMLElement, focusable = true) => {
      focusable = focusable != false;
      if (!el.dataset.focusable || el.dataset.focusable != focusable + '') {
        el.dataset.focusable = String(focusable);
        if (focusable) el.tabIndex = -1;
      }
    };
    // focusable directive
    vue.directive('focus', {
      beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        disableElement(el, binding.value);
      },
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        el.addEventListener('mousedown', (e) => {
          if (el === document.activeElement) {
            el.dispatchEvent(new KeyboardEvent('keydown', {
              key: 'Enter',
            }));
          }
        });
      },
      updated(el: HTMLElement, binding: DirectiveBinding) {
        disableElement(el, binding.value);
      },
      unmounted(el: HTMLElement) {
        el.removeAttribute('data-focusable');
      },
    });

    // It can be expensive to check through this list for every events registered for every button.
    // With typescript this could be done with typedefinition
    const EVENTS = [
      'willmove',
      'willunfocus',
      'unfocused',
      'willfocus',
      'focused',
      'navigatefailed',
      'enter-down',
      'enter-up',
    ];

    // At some point we might need the handling of what happens with eventlistener when the binding is updated.
    // This might also be split into different directives to handle remove eventlisteners
    vue.directive('focus-events', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        Object.keys(binding.value).forEach((key, i) => {
          if (EVENTS.includes(key))
            el.addEventListener(EVENT_PREFIX + key, binding.value[key]);
        });
      },
    });
  },
};

export * from './options';

export default vueSpatialNavigation;
