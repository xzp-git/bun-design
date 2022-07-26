import BIcon from "./src/icon.vue";

export default BIcon;

declare module "vue" {
  export interface GlobalComponents {
    BIcon: typeof BIcon;
  }
}
