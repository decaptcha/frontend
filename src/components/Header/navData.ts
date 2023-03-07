import {
  CONTRIBUTE_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
} from "../../constants";
import { data } from "../../data";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Researcher",
    href: `/researcher`,
  },
  {
    label: "Developer",
    href: `/developer`,
  },
];