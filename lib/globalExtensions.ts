import type SpatialNavigation from "./spatial_navigation";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $SpatialNavigation: typeof SpatialNavigation;
  }
}
