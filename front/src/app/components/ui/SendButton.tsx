export default function Button({
  type = "button",
  children,
  onClick,
  disabled = false,
  className,
}: {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}
