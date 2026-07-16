import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import Button from "./Button";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  variant?: "default" | "danger";
  confirmText?: string;
  cancelText?: string;

  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;

  loading?: boolean;
}

function ConfirmDialog({
  open,
  title,
  description,
  variant = "default",
  confirmText = "Confirm",
  cancelText = "Cancel",

  onOpenChange,
  onConfirm,

  loading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>

            <Dialog.Close asChild>
              <button className="rounded p-1 hover:bg-slate-100">
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="mt-4 text-slate-600">
            {description}
          </Dialog.Description>

          <div className="mt-8 flex justify-end gap-3">
            <Dialog.Close asChild>
              <Button variant="outline">{cancelText}</Button>
            </Dialog.Close>

            <Button
              variant={variant === "danger" ? "danger" : "primary"}
              onClick={onConfirm}
              disabled={loading}
            >
              {confirmText}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ConfirmDialog;
