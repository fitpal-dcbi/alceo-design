
type BoxShadow = 'none' | 'default';
export interface CardProps {
  children?: React.ReactNode;
  color?: string;
  boxShadow?: BoxShadow;
  bgColor?: string;
}
