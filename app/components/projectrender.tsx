import OverviewSection from "./overviewsection";

import GallerySection from "./gallerysection";

import TechStackSection from "./techstacksection";

import TestingSection from "./testingsection";

import MetricsSection from "./metricssection";

import LinkSection from "./linksection";

import VideoSection from "./videosection";

import SideNavigation from "./listcontents";

import ArtifactSection from "./artifactsection";

import { slugify } from "../lib/slug";

export default function ProjectRenderer({ project }: any) {
  const listcontent = project.sections.map((section: any) => ({
    id: slugify(section.title),
    label: section.title,
  }));
  return (
    <>
      <SideNavigation items={listcontent} />
      {project.sections.map((section: any, index: number) => {
        const id = slugify(section.title);

        switch (section.type) {
          case "overview":
            return (
              <section id={id} key={index}>
                <OverviewSection section={section} />
              </section>
            );

          case "gallery":
            return (
              <section id={id} key={index}>
                <GallerySection section={section} />
              </section>
            );

          case "tech":
          case "feature":
            return (
              <section id={id} key={index}>
                <TechStackSection section={section} />
              </section>
            );

          case "testing":
            return (
              <section id={id} key={index}>
                <TestingSection section={section} />
              </section>
            );

          case "metrics":
            return (
              <section id={id} key={index}>
                <MetricsSection section={section} />
              </section>
            );
          case "artifacts":
            return (
              <section id={id} key={index}>
                <ArtifactSection key={index} section={section} />
              </section>
            );

          case "links":
            return (
              <section id={id} key={index}>
                <LinkSection section={section} />
              </section>
            );

          case "video":
            return (
              <section id={id} key={index}>
                <VideoSection section={section} />
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
