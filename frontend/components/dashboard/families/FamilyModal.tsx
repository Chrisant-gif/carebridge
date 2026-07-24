"use client";

import Modal from "../Modal";

import { Family } from "../../../types/family";
import FamilyForm, { FamilyFormData } from "./FamilyForm";

interface FamilyModalProps {
  open: boolean;
  family: Family | null;
  onClose: () => void;
  onSave: (data: FamilyFormData) => void;
}

export default function FamilyModal({
  open,
  family,
  onClose,
  onSave,
}: FamilyModalProps) {
  return (
    <Modal
      open={open}
      title={family ? "Edit Family" : "Register New Family"}
      onClose={onClose}
    >
      <FamilyForm
        family={family}
        onCancel={onClose}
        onSave={onSave}
      />
    </Modal>
  );
}