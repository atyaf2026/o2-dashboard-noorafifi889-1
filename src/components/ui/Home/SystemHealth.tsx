import { ShieldCheck } from 'lucide-react';
import React from 'react';

const services = [
  { name: 'Database Engine', status: 'OPTIMAL', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'API Gateway', status: 'OPERATIONAL', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'Asset Storage', status: 'HIGH LOAD', color: 'text-amber-500', bg: 'bg-amber-50' },
];

const SystemHealth = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 w-full h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-900">System Health</h3>
            <p className="text-sm text-zinc-400">Real-time status monitor</p>
          </div>
        </div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
      </div>

      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100/50">
            <span className="text-sm font-medium text-zinc-700">{service.name}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${service.bg} ${service.color}`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;