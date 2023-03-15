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
  comingSoon?: any;
  passHref: any;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Twitter",
    href: `https://twitter.com/decaptchaio`,
    passHref: false,
  },
  {
    label: "Demo Site",
    href: `http://localhost:8083`,
    passHref: false,
  },
  {
    label: "Open dApp",
    href: `/researcher`,
    passHref: true,
  },
];
