import { NextPage } from "next";

import { Hero } from "@/components/HomepageSections/Hero";
import { SEO } from "@/components/SEO";


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
