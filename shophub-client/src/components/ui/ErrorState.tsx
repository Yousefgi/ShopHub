import Button from "./Button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load the requested data.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">
      <h3 className="text-xl font-semibold text-red-700">{title}</h3>

      <p className="mt-2 text-red-600">{description}</p>

      {onRetry && (
        <Button className="mt-6" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}

export default ErrorState;
