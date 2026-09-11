import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold font-serif-display text-[#0066FF] mb-4">404</h1>
      <h2 className="text-xl font-bold mb-2">Diagnostic Page Not Found</h2>
      <p className="text-slate-400 text-sm mb-6 text-center max-w-md">
        The requested bay or service record could not be located.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-[#0066FF] text-white text-xs font-semibold hover:bg-[#0052cc] transition-colors"
      >
        Return to Workshop
      </Link>
    </div>
  );
}
