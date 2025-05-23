export default function Input({
  placeholder,
  value,
  onChange,
  onKeyDown,
  maxLength,
  type,
  className,
  name,
}: {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  type?: string;
  className?: string;
  name: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength={maxLength}
      className={`${className} font-switzer w-full h-12  px-5 md:px-10 rounded-full border border-gray-300 shadow-lg bg-slate-100 dark:bg-slate-200 placeholder-gray-500 text-gray-800 focus:outline-gray-900 dark:focus:outline-slate-100`}
    />
  );
}
