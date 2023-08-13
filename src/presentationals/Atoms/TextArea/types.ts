export interface TextAreaProps {
  placeholder: string;
  onChange: (e: TextAreaChangeEvent) => void;
  lines: number;
}

interface TextAreaChangeEvent {
  nativeEvent: {
    text: string;
  };
}
