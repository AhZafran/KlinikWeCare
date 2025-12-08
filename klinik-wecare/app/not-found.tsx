import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="mx-auto max-w-md text-center px-4">
        <h1 className="text-6xl font-bold text-[#283a67] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page may have
          been moved or doesn't exist.
        </p>
        <Button asChild className="bg-[#283a67] hover:bg-[#1f2d4f]">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
