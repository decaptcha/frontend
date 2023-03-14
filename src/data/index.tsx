
import { FaConnectdevelop, FaDatabase, FaUserAstronaut, FaUsers } from "react-icons/fa";
import { NavItem } from "@/components/Header/navData";
import { BsCashCoin } from "react-icons/bs";

export const data: Array<NavItem> = [
  {
    label: "Researcher",
    href: `/researcher`,
    icon: <FaUserAstronaut display={"block"} />,
    passHref: true,
    comingSoon: false,
  },
  {
    label: "Datasets",
    href: `/researcher/datasets`,
    icon: <FaDatabase />,
    passHref: true,
    comingSoon: false,
  },
  {
    label: "Developer",
    href: `/developer`,
    icon: <FaUsers />,
    passHref: true,
    comingSoon: false,
  },
  {
    label: "Redeem",
    href: `/redeem`,
    icon: <BsCashCoin />,
    passHref: true,
    comingSoon: true,
  },
];
