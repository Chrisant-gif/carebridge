"use client";

import { Family } from "../../../types/family";

import Modal from "../Modal";
import VisitForm, { VisitFormData } from "./VisitForm";

interface VisitModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: VisitFormData) => void;
  initialData?: VisitFormData;
  families: Family[];
}

export default function VisitModal({
  open,
  onClose,
  onSave,
  initialData,
  families,
}: VisitModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={initialData ? "Edit Visit" : "Add Visit"}
    >
      <VisitForm
        initialData={initialData}
        families={families}
        onSubmit={onSave}
        onCancel={onClose}
      />
    </Modal>
  );
}