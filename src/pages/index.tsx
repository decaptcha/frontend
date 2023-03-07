import path from "path";
import { NextPage } from "next";

import { AppLayout } from "@/layout/AppLayout";
import { Hero } from "@/components/HomepageSections/Hero";
import { GettingStarted } from "@/components/HomepageSections/GettingStarted";
import { OpenSourceProps } from "@/components/HomepageSections/OpenSource";
import { SEO } from "@/components/SEO";
import { ExploreTemplates } from "@/components/HomepageSections/ExploreTemplates";

type PageProps = OpenSourceProps & {};

const Home: NextPage<PageProps> = ({
  contributors,
  stargazers,
  categoriesCount,
  templatesCount,
}: PageProps) => {
  return (
    <>
      <SEO />
      <Hero categoriesCount={categoriesCount} templatesCount={templatesCount} />
      <GettingStarted />
      <ExploreTemplates templatesCount={templatesCount!} />
    </>
  );
};

export default Home;
