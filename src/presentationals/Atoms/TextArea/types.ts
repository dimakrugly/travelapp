export interface TextAreaProps {
  placeholder?: string;
  onChange: (text: string) => void;
  lines?: number;
  text: string;
}
