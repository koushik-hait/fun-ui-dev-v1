export type HorizontalPosition = "left" | "right";
  
  export type VerticalPosition = "top" | "bottom";
  
  export type ButtonVariant = "primary" | "secondary" | "light";

  const sizeValues = ["xs", "sm", "md", "lg", "xl"] as const;
  
  export type Size = (typeof sizeValues)[number];
  
  const colorValues = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ] as const;
  
  export type Color = (typeof colorValues)[number];

  const justifyContentValues = ["start", "end", "center", "between", "around", "evenly"] as const;
  export type JustifyContent = (typeof justifyContentValues)[number];
  
  const alignItemsValues = ["start", "end", "center", "baseline", "stretch"] as const;
  export type AlignItems = (typeof alignItemsValues)[number];
  
  export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";