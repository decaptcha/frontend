import { socialButtons } from "./components/socialMediaButtons";
import { buttons } from "./components/buttons";
import { cards } from "./components/cards";
import { result } from "./components/result";
import { hero } from "./templates/hero";
import { features } from "./templates/features";
import { navbar } from "./templates/navbar";
import { sidebar } from "./templates/sidebar";
import { authentication } from "./templates/authentication";
import { newsletter } from "./templates/newsletter";
import { footer } from "./templates/footer";
import { testimonials } from "./templates/testimonials";
import { pricing } from "./templates/pricing";
import { statistics } from "./templates/statistics";
import { blog } from "./templates/blog";
import { contact } from "./templates/contact";
import { carousel } from "./templates/carousel";
import { product } from "./templates/product";
import { multistep } from "./templates/basic3StepForm";

import { imagesAndIcons } from "./components/imagesAndIcons";
import { FaConnectdevelop } from "react-icons/fa";
import { researcher } from "./templates/researcher";
import { NavItem } from "@/components/Header/navData";

export const data: Array<NavItem> = [
  {
    label: "Researcher",
    href: `/researcher`,
  },
  {
    label: "Datasets",
    href: `/researcher/datasets`,
  },
  {
    label: "Developer",
    href: `/developer`,
  },
];
