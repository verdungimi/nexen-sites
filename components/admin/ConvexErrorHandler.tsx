"use client";

import { useEffect, useState } from "react";

interface ConvexErrorHandlerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ConvexErrorHandler({ children, fallback }: ConvexErrorHandlerProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes("Convex") || event.error?.message?.includes("useQuery")) {
        setError(event.error);
        setHasError(true);
      }
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      fallback || (
        <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-lg">
          <p className="font-semibold">Convex hiba történt</p>
          <p className="text-sm mt-2">
            {error?.message || "Ismeretlen hiba"}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setError(null);
              window.location.reload();
            }}
            className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg text-white"
          >
            Oldal Újratöltése
          </button>
        </div>
      )
    );
  }

  return <>{children}</>;
}
