import { CERTIFICATION_STATUS, CertificationStatus } from "../constants/certification.status";

export interface Certification {
  provider: string;
  year: string;
  logoUrl: string;
  courses: {
    name: string;
    status: CertificationStatus
    certificateUrl?: string;
  }[];
}

