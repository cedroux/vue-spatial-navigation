type Selector = string;

export interface vjsnOptions {
  /**
   * #### `selector`

  + Type: Selector
  + Default: `''`

  Elements matching `selector` are regarded as navigable elements in SpatialNavigation. However, hidden or disabled elements are ignored as they can not be focused in any way.
   */
  selector?: Selector;

  /**
   * #### `straightOnly`

  + Type: Boolean
  + Default: `false`

    When it is `true`, only elements in the straight (vertical or horizontal) direction will be navigated. i.e. SpatialNavigation ignores elements in the oblique directions.
   */
  straightOnly?: boolean;

  /**
   * #### `straightOverlapThreshold`

  + Type: Number in the range [0, 1]
  + Default: `0.5`

This threshold is used to determine whether an element is considered in the straight (vertical or horizontal) directions. Valid number is between 0 to 1.0.

Setting it to 0.3 means that an element is counted in the straight directions only if it overlaps the straight area at least 0.3x of its total area.

   */
  straightOverlapThreshold?: number;

  /**
   * #### `rememberSource`

  + Type: Boolean
  + Default: `false`

When it is `true`, the previously focused element will have higher priority to be chosen as the next candidate.
   */
  rememberSource?: boolean;

  /**
   * #### `disabled`

  + Type: Boolean
  + Default: `false`

When it is `true`, elements defined in this section are unnavigable. This property is modified by [`disable()`](#spatialnavigationdisablesectionid) and [`enable()`](#spatialnavigationenablesectionid) as well.
   */
  disabled?: boolean;

  /**
   * #### `defaultElement`

  + Type: Selector (without @ syntax)
  + Default: `''`

When a section is specified to be the next focused target, e.g. [`focus('some-section-id')`](#spatialnavigationfocussectionidselector-silent) is called, the first navigable element matching `defaultElement` within this section will be chosen first.
   */
  defaultElement?: Selector;

  /**
   * #### `enterTo`

  + Type: Selector, `''`, `'last-focused'` or `'default-element'`
  + Default: `''`

If the focus comes from another section, you can define which element in this section should be focused first.

`'last-focused'` indicates the last focused element before we left this section last time. If this section has never been focused yet, the default element (if any) will be chosen next.

`'default-element'` indicates the element defined in [`defaultElement`](#defaultelement).

`''` (empty string) implies following the original rule without any change.
   */
  enterTo?: Selector | '' | 'last-focused' | 'default-element';

  /**
   * #### `leaveFor`

  + Type: `null` or PlainObject
  + Default: `null`

This property specifies which element should be focused next when a user presses the corresponding arrow key and intends to leave the current section.

It should be a PlainObject consists of four properties: `'left'`, `'right'`, `'up'` and `'down'`. Each property should be a Selector. Any of these properties can be omitted, and SpatialNavigation will follow the original rule to navigate.

**Note:** Assigning `false` or `null` to any of these properties makes SpatialNavigation go nowhere at that direction.

   */
  leaveFor?: {
    left?: Selector | false | null;
    right?: Selector | false | null;
    up?: Selector | false | null;
    down?: Selector | false | null;
  };

  /**
   * #### `restrict`

  + Type: `'self-first'`, `'self-only'` or `'none'`
  + Default: `'self-first'`

`'self-first'` implies that elements within the same section will have higher priority to be chosen as the next candidate.

`'self-only'` implies that elements in the other sections will never be navigated by arrow keys. (However, you can always focus them by calling [`focus()`](#spatialnavigationfocussectionidselector-silent) manually.)

`'none'` implies no restriction.
   */
  restrict?: 'self-first' | 'self-only' | 'none';

  /**
   * #### `tabIndexIgnoreList`

  + Type: String
  + Default: `'a, input, select, textarea, button, iframe, [contentEditable=true]'`

Elements matching `tabIndexIgnoreList` will never be affected by [`makeFocusable()`](#spatialnavigationmakefocusablesectionid). It is usually used to ignore elements that are already focusable.
   */
  tabIndexIgnoreList?: string;

  /**
   * #### `navigableFilter`

  + Type: `'null'` or `function(HTMLElement)`
  + Default: `null`

A callback function that accepts a DOM element as the first argument.

SpatialNavigation calls this function every time when it tries to traverse every single candidate. You can ignore arbitrary elements by returning `false`.

   */
  navigableFilter?: (elem: HTMLElement, sectionId?: string) => boolean;

  /**
   * scrollIntoViewOptions https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
   */
  scrollOptions?: ScrollIntoViewOptions; // scrollIntoViewOptions https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
}
