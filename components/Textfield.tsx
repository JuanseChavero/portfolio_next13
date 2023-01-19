import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

interface FieldProps {
  label: string;
}

interface FormGroupProps extends FieldProps {
  children: ReactNode;
}

const fieldStyle =
  'text-md w-full rounded-md bg-gray-200 hover:brightness-[1.05] dark:hover:brightness-[0.9] p-3 text-white placeholder-gray-400 outline-none outline-[3px] focus:outline focus:outline-offset-4 focus:outline-primary dark:bg-neutral-100 dark:text-black dark:placeholder-slate-400';

function FormGroup({ label, children }: FormGroupProps) {
  return (
    <label className="flex flex-col">
      <span className="mb-2">{label}</span>
      {children}
    </label>
  );
}

export function Textfield({
  label,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FormGroup label={label}>
      <input className={`${fieldStyle}`} {...props} />
    </FormGroup>
  );
}

export function TextArea({
  label,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FormGroup label={label}>
      <textarea className={`h-[10rem] resize-none ${fieldStyle}`} {...props} />
    </FormGroup>
  );
}
