import { AppearanceSettings } from "@/src/components/ui/setting/AppearanceSettings";
import { DangerZone, NotificationSetting } from "@/src/components/ui/setting/NotificationSetting";
import { ProfileForm } from "@/src/components/ui/setting/ProfileForm";
import { SettingsSidebar } from "@/src/components/ui/setting/SettingsSidebar";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex  gap-10">
      <SettingsSidebar />
      
      <main className="flex-1 max-w-4xl space-y-8">
        <ProfileForm />
        <AppearanceSettings />
        <NotificationSetting />
        <DangerZone />
      </main>
    </div>
  );
}