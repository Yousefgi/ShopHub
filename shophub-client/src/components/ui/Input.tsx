import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={`
            w-full rounded-xl border border-slate-300
            px-4 py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            disabled:bg-slate-100
            ${error ? "border-red-500 focus:ring-red-100" : ""}
            ${className}
          `}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
