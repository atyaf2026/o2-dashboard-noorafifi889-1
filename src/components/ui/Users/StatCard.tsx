import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  statusColor?: string;
}

export const StatCard = ({ title, value, trend, statusColor }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-slate-900">{value}</span>
      {trend && <span className="text-sm font-semibold text-emerald-500">{trend}</span>}
      {statusColor && <span className={`w-2 h-2 rounded-full ${statusColor}`} />}
    </div>
  </div>
);