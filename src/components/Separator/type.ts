export type SeparatorAlignment = "left" | "right" | "center";
export type SeparatorIndentation = 40 | 32 | 24 | 16 | 12 | number;

export interface BaseSeparatorProps {
  indentation?: SeparatorIndentation;
  alignment?: SeparatorAlignment;
}

export type SeparatorProps = BaseSeparatorProps;
