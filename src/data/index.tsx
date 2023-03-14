
import { FaConnectdevelop, FaDatabase, FaUserAstronaut } from "react-icons/fa";
import { NavItem } from "@/components/Header/navData";

export const data: Array<NavItem> = [
  {
    label: "Researcher",
    href: `/researcher`,
    icon: <FaUserAstronaut display={"block"} />,
    passHref: true,
  },
  {
    label: "Datasets",
    href: `/researcher/datasets`,
    icon: <FaDatabase />,
    passHref: true,
  },
  {
    label: "Developer",
    href: `/developer`,
    icon: <FaConnectdevelop />,
    passHref: true,
  },
  {
    label: "Redeem",
    href: `/redeem`,
    icon: <FaConnectdevelop />,
    passHref: true,
  },
];
