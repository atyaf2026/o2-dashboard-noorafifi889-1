import { Shield, GraduationCap } from 'lucide-react';

export const RolePermissions = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
    <h3 className="text-lg font-bold text-slate-900 mb-6">Role Permissions</h3>
    <div className="space-y-4">
      {[
        { title: 'Administrator', Icon: Shield },
        { title: 'Standard Student', Icon: GraduationCap }
      ].map((role) => (
        <div key={role.title} className="flex items-center justify-between p-3 rounded-lg border border-gray-50 bg-gray-50/30">
          <div className="flex items-center gap-3">
            <role.Icon className="w-5 h-5 text-indigo-600" />
            <span className="font-medium text-slate-700">{role.title}</span>
          </div>
          <button className="text-sm font-bold text-indigo-600 hover:underline">Edit Policy</button>
        </div>
      ))}
    </div>
  </div>
);

export const InviteBanner = () => (
  <div className="bg-indigo-600 p-8 rounded-xl shadow-lg text-white flex flex-col justify-between h-full">
    <div>
      <h3 className="text-2xl font-bold mb-3">Invite your entire cohort</h3>
      <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
        Import users directly from CSV or sync with your existing learning management system.
      </p>
    </div>
    <button className="mt-6 bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg w-fit hover:bg-indigo-50 transition-colors">
      Bulk Upload Users
    </button>
  </div>
);