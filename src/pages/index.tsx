import path from "path";
import { NextPage } from "next";

import { AppLayout } from "@/layout/AppLayout";
import { Hero } from "@/components/HomepageSections/Hero";
import { GettingStarted } from "@/components/HomepageSections/GettingStarted";
import { OpenSourceProps } from "@/components/HomepageSections/OpenSource";
import { SEO } from "@/components/SEO";
import { ExploreTemplates } from "@/components/HomepageSections/ExploreTemplates";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../theme"

type PageProps = OpenSourceProps & {};

const Home: NextPage<PageProps> = ({
  contributors,
  stargazers,
  categoriesCount,
  templatesCount,
}: PageProps) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SEO />
      <Hero categoriesCount={categoriesCount} templatesCount={templatesCount} />
      <GettingStarted />
      <ExploreTemplates templatesCount={templatesCount!} />
    </>
  );
};

export default Home;
