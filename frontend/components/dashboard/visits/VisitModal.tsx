"use client";

import Modal from "../Modal";
import VisitForm, { VisitFormData } from "./VisitForm";

interface VisitModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: VisitFormData) => void;
  initialData?: VisitFormData;
}

export default function VisitModal({
  open,
  onClose,
  onSave,
  initialData,
}: VisitModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        initialData
          ? "Edit Visit"
          : "Add Visit"
      }
    >
      <VisitForm
        initialData={initialData}
        onSubmit={onSave}
        onCancel={onClose}
      />
    </Modal>
  );
}