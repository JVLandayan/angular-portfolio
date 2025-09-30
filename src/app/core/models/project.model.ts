
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  codeLink: string;
  private?: boolean;
  noLiveDemo?: boolean;
  techType?: string;
}

export interface ProjectGroup {
  baseTitle: string;
  image: string;
  description: string;
  variants: Project[];
}
