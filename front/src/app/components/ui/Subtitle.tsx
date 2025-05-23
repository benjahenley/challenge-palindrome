export default function HomeTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`font-switzer text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-shadow-lg ${className}`}>
      {children}
    </h3>
  );
}
