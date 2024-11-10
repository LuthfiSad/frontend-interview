export interface DropdownProps {
  title: React.ReactNode;
  className?: string,
  option: {
    label: string;
    onClick: () => void;
  }[];
}