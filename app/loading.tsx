export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-primary border-r-primary-lime" />
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary to-primary-lime opacity-70 blur-[6px]" />
      </div>
      <p className="mt-6 font-display text-sm font-medium tracking-[0.3em] text-gray-500">
        VISIVINE
      </p>
    </div>
  );
}
