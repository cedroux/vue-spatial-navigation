import SpatialNavigation from "./spatial_navigation.js";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $SpatialNavigation: typeof SpatialNavigation;
  }
}
