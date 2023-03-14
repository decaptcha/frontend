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
  icon?: any;
  passHref: any;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: `/`,
    passHref: true,
  },
  {
    label: "Open DApp",
    href: `/researcher`,
    passHref: true,
  },
  {
    label: "Demo",
    href: `http://localhost:8083`,
    passHref: false,
  },
];
