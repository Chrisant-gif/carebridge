"use client";

import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          {message}
        </p>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            {cancelText}
          </button>

          <PrimaryButton onClick={onConfirm}>
            {confirmText}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}