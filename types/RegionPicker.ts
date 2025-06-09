export interface RegionPickerProps {
  value: string;
  onChange: (value: string) => void;
  editable?: boolean;
  error?: string;
}
