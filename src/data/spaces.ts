import { Space } from "../types/booking";

export const spaces: Space[] = [
  {
    id: "mr-1",
    type: "meeting",
    name: "Innovation Hub Meeting Room 1",
    capacity: 8,
    description: "Spacious meeting room with modern amenities and presentation equipment",
    imageUrl: "/placeholder.svg",
    pricePerSlot: 5000,
  },
  {
    id: "mr-2",
    type: "meeting",
    name: "Collaboration Meeting Room 2",
    capacity: 8,
    description: "Bright corner meeting room with whiteboard walls and comfortable seating",
    imageUrl: "/placeholder.svg",
    pricePerSlot: 5000,
  },
  {
    id: "sd-1",
    type: "desk",
    name: "Focus Zone Desk 1",
    capacity: 1,
    description: "Ergonomic single desk with adjustable height and dual monitor support",
    imageUrl: "/placeholder.svg",
    pricePerSlot: 2000,
  },
  {
    id: "sd-2",
    type: "desk",
    name: "Creator's Desk 2",
    capacity: 1,
    description: "Single desk in our quiet zone with extra power outlets",
    imageUrl: "/placeholder.svg",
    pricePerSlot: 2000,
  },
];