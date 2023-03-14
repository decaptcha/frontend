import path from "path";
import { NextPage } from "next";

import { AppLayout } from "@/layout/AppLayout";
import { Hero } from "@/components/HomepageSections/Hero";
import { GettingStarted } from "@/components/HomepageSections/GettingStarted";
import { Integration } from "@/components/HomepageSections/Integration";
import { SEO } from "@/components/SEO";
import { ExploreTemplates } from "@/components/HomepageSections/ExploreTemplates";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../theme"


const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Hero  />
      {/* <GettingStarted /> */}
      {/* <ExploreTemplates /> */}
    </>
  );
};

export default Home;
