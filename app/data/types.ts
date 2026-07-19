export interface Project {
  slug: string;

  title: string;

  subtitle: string;

  category: "qa" | "development" | "teaching";

  cover: string;

  sections: Section[];
}

export type Section =
  | OverviewSection
  | GallerySection
  | TechStackSection
  | FeatureSection
  | TestingSection
  | MetricsSection
  | ArtifactSection
  | LinkSection
  | VideoSection;

export interface OverviewSection {
  type: "overview";

  title: string;
  content?: string;
  items?: string[];
}

export interface GallerySection {
  type: "gallery";
  title: string;
  images: string[];
}

export interface TechStackSection {
  type: "tech";

  title: string;

  items: string[];
}

export interface FeatureSection {
  type: "feature";

  title: string;

  items: string[];
}

export interface TestingSection {
  type: "testing";

  title: string;

  items: {
    label?: string;
    value: string[];
  }[];
}

export interface MetricsSection {
  type: "metrics";

  title: string;

  items: {
    label: string;

    value?: string;
    description?: string;
  }[];
}

export interface ArtifactSection {
  type: "artifacts";

  title: string;

  items: {
    title: string;
    description?: string;
    type?: string;
    images?: string[];
    file?: string;
  }[];
}

export interface LinkSection {
  type: "links";

  title: string;

  github?: string;

  demo?: string;

  figma?: string;

  certificate?: string;
  testcase?: string;
}

export interface VideoSection {
  type: "video";
  title: string;

  youtube: string;
}
