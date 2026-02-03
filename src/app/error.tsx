"use client";

import { STRINGS } from "@/res/strings";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-2xl font-semibold text-white">
        {STRINGS.SCREENS.ERROR.TITLE}
      </h2>
      <p className="text-center text-white">
        {STRINGS.SCREENS.ERROR.MESSAGE}
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
      >
        {STRINGS.SCREENS.ERROR.RETRY_BUTTON}
      </button>
    </div>
  );
}
