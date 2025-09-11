export const CERTIFICATION_STATUS = {
  NEXT:"Next",
  INPROGRESS:"In Progress",
  COMPLETED: "Completed",
  QUEUED: "Queued"
} as const;

export type CertificationStatus = typeof CERTIFICATION_STATUS[keyof typeof CERTIFICATION_STATUS];

