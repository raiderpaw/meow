import * as Sentry from "@sentry/react";

export function ErrorButton() {
  return (
    <button
      className="error-button"
      onClick={() => {
        Sentry.captureException(new Error("okokok"));
      }}
    >
      Throw new Error
    </button>
  );
}
