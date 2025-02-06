export type SpaceType = "meeting" | "desk";

export interface Space {
  id: string;
  type: SpaceType;
  name: string;
  capacity: number;
  description: string;
  imageUrl: string;
  pricePerSlot: number;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
}

export interface Booking {
  spaceId: string;
  timeSlotId: string;
  date: string;
}