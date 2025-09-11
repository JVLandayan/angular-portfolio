
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  codeLink: string;
  private?: boolean;
  noLiveDemo?:boolean;
}
