export default function GradientBlob({
  className = "",
  from = "#22C55E",
  to = "#A3E635",
}: {
  className?: string;
  from?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden
      className={`animate-blob rounded-full blur-[110px] ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${from}, ${to} 70%, transparent 100%)`,
        opacity: 0.35,
      }}
    />
  );
}
