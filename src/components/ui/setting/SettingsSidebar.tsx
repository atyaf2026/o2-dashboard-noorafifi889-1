import { User, Bell, Shield, Palette } from 'lucide-react';

const menuItems = [
  { id: 'profile', label: 'Profile', icon: User, active: true },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
];

export const SettingsSidebar = () => (
  <nav className="w-64 space-y-1">
    {menuItems.map((item) => (
      <button
        key={item.id}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
          item.active 
            ? 'bg-indigo-50 text-indigo-700' 
            : 'text-slate-500 hover:bg-gray-50'
        }`}
      >
        <item.icon className="w-4 h-4" />
        {item.label}
      </button>
    ))}
  </nav>
);