export type Alert = {
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  triggerValue: number | null;
  updatedAt: Date;
};
