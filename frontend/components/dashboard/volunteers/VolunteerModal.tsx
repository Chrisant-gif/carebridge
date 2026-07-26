"use client";

import Modal from "../Modal";
import VolunteerForm, {
  VolunteerFormData,
} from "./VolunteerForm";

import { Volunteer } from "../../../types/volunteer";

interface VolunteerModalProps {
  open: boolean;
  volunteer?: Volunteer | null;
  onClose: () => void;
  onSave: (data: VolunteerFormData) => void;
}

export default function VolunteerModal({
  open,
  volunteer,
  onClose,
  onSave,
}: VolunteerModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        volunteer
          ? "Edit Volunteer"
          : "Add Volunteer"
      }
    >
      <VolunteerForm
        volunteer={volunteer}
        onCancel={onClose}
        onSave={onSave}
      />
    </Modal>
  );
}