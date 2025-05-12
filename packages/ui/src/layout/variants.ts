export const space = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
  "10": "gap-10",
  "12": "gap-12",
  "16": "gap-16",
} as const;

export const horizontalAlignX = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between",
} as const;

export const horizontalAlignY = {
  top: "items-start",
  center: "items-center",
  bottom: "items-end",
} as const;

export const verticalAlignX = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
} as const;

export const verticalAlignY = {
  top: "justify-start",
  center: "justify-center",
  bottom: "justify-end",
} as const;
