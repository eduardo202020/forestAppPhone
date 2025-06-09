export interface NombreInputProps {
  value: string;
  onChange: (value: string) => void;
  editable?: boolean;
  error?: string;
}
