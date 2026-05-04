import { Sun, Moon } from 'lucide-react';

export const AppearanceSettings = () => (
  <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
    <div>
      <h2 className="text-xl font-bold text-slate-900">Appearance</h2>
      <p className="text-sm text-gray-500">Customize how the dashboard looks and feels to suit your workspace.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-700">Dashboard Theme</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'light', label: 'Light Mode', desc: 'Default bright workspace', icon: Sun, active: true },
          { id: 'dark', label: 'Dark Mode', desc: 'Easier on the eyes at night', icon: Moon }
        ].map((theme) => (
          <button 
            key={theme.id}
            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
              theme.active ? 'border-indigo-600 bg-indigo-50/30' : 'border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 text-left">
              <div className={`p-2 rounded-lg ${theme.active ? 'bg-white text-indigo-600' : 'bg-gray-100 text-slate-500'}`}>
                <theme.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{theme.label}</p>
                <p className="text-xs text-gray-400">{theme.desc}</p>
              </div>
            </div>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${theme.active ? 'border-indigo-600' : 'border-gray-300'}`}>
              {theme.active && <div className="w-2 h-2 bg-indigo-600 rounded-full" />}
            </div>
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-700">Primary Brand Color</h3>
      <div className="flex gap-3">
        {['#6366f1', '#10b981', '#f43f5e', '#f59e0b', '#1e293b'].map((color, idx) => (
          <button 
            key={color} 
            style={{ backgroundColor: color }}
            className={`w-8 h-8 rounded-full border-4 border-white shadow-sm ring-1 ring-gray-100 ${idx === 0 ? 'ring-indigo-600 ring-offset-2' : ''}`}
          />
        ))}
      </div>
    </div>
  </section>
);