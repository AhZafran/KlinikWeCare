export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#283a67]"></div>

        {/* Loading text */}
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
