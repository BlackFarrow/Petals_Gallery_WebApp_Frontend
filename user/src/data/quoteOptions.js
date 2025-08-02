// src/data/quoteOptions.js
export const quoteFields = [
  {
    id: "photographyType",
    label: "Photography Type",
    options: [
      { label: "Wedding", price: 50000 },
      { label: "Portrait", price: 15000 },
      { label: "Product", price: 20000 },
      { label: "Fashion", price: 25000 },
      { label: "Other", price: 10000 },
    ],
  },
  {
    id: "videographyType",
    label: "Videography Type",
    options: [
      { label: "Event", price: 40000 },
      { label: "Wedding", price: 60000 },
      { label: "Drone", price: 30000 },
      { label: "Interview", price: 20000 },
      { label: "Other", price: 10000 },
    ],
  },
  {
    id: "duration",
    label: "Duration",
    options: [
      { label: "1 Hour", price: 10000 },
      { label: "3 Hours", price: 20000 },
      { label: "Half Day", price: 30000 },
      { label: "Full Day", price: 40000 },
      { label: "Multi-Day", price: 60000 },
    ],
  },
  {
    id: "editing",
    label: "Post-Editing",
    options: [
      { label: "Basic", price: 5000 },
      { label: "Advanced", price: 10000 },
      { label: "Cinematic", price: 20000 },
      { label: "Raw Only", price: 0 },
      { label: "None", price: 0 },
    ],
  },
  {
    id: "deliverySpeed",
    label: "Delivery Speed",
    options: [
      { label: "1 Day", price: 15000 },
      { label: "3 Days", price: 10000 },
      { label: "1 Week", price: 5000 },
      { label: "2 Weeks", price: 2000 },
      { label: "Flexible", price: 0 },
    ],
  },
  {
    id: "addOns",
    label: "Add-ons",
    options: [
      { label: "Drone Shots", price: 15000 },
      { label: "Photo Album", price: 10000 },
      { label: "USB Delivery", price: 5000 },
      { label: "Extra Prints", price: 8000 },
      { label: "None", price: 0 },
    ],
  },
];
