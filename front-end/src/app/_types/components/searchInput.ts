export interface SearchInputProps {
  inputId: string;
  value: string;
  onSubmit: ([...args]: any) => any;
  onChange: ([...args]: any) => any;
  placeholder: string;
}
