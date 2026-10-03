import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground select-none">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-medium tracking-tight">404</h1>
        <div className="h-6 w-px bg-border" />
        <p className="text-sm text-muted-foreground">
          <span>This page could not be found &ndash; </span>
          <Link
            href="/"
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            back home
          </Link>
        </p>
      </div>
    </div>
  );
}