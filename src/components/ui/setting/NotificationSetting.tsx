export const NotificationSetting = () => (
  <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
    <div>
      <h2 className="text-lg font-bold text-slate-900">Notifications</h2>
      <p className="text-sm text-gray-500">Current: All email notifications enabled</p>
    </div>
    <button className="px-5 py-2 border border-gray-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-gray-50 transition-colors">
      Manage
    </button>
  </section>
);

export const DangerZone = () => (
  <section className="bg-red-50/50 p-8 rounded-xl border border-red-100 flex items-center justify-between">
    <div>
      <h2 className="text-lg font-bold text-red-600">Delete Account</h2>
      <p className="text-sm text-red-500 opacity-80">Once you delete your account, there is no going back. Please be certain.</p>
    </div>
    <button className="px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 shadow-sm transition-colors">
      Deactivate
    </button>
  </section>
);