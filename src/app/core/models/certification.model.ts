export interface Certification {
  provider: string;
  year: string;
  logoUrl: string;
  courses: {
    name: string;
    status: 'Completed' | 'Ongoing';
    certificateUrl?: string;
  }[];
}
