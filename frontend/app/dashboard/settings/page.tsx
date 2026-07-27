import PageHeader from "../../../components/dashboard/PageHeader";

import OrganizationSettings from "../../../components/dashboard/settings/OrganizationSettings";
import DonationSettings from "../../../components/dashboard/settings/DonationSettings";
import UserSettings from "../../../components/dashboard/settings/UserSettings";
import NotificationSettings from "../../../components/dashboard/settings/NotificationSettings";
import AppearanceSettings from "../../../components/dashboard/settings/AppearanceSettings";
import SecuritySettings from "../../../components/dashboard/settings/SecuritySettings";
import BackupSettings from "../../../components/dashboard/settings/BackupSettings";
import SystemInfo from "../../../components/dashboard/settings/SystemInfo";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your organization, users, security and system preferences."
      />

      <div className="space-y-10">
        <OrganizationSettings />

        <DonationSettings />

        <UserSettings />

        <NotificationSettings />

        <AppearanceSettings />

        <SecuritySettings />

        <BackupSettings />

        <SystemInfo />
      </div>
    </>
  );
}