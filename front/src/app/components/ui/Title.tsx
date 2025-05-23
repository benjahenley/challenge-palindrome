export default function HomeTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`font-switzer text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-shadow-lg ${className}`}>
      {children}
    </h1>
  );
}
