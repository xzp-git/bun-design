import _BIcon from "./src/icon.vue";
import { withInstall } from "@bun-design/utils/with-install";

 

const BIcon = withInstall(_BIcon)

export default BIcon;

declare module "vue" {
  export interface GlobalComponents {
    BIcon: typeof BIcon;
  }
}
