"use client";
import React from 'react';
import { Filter, Download, MoreVertical, Database, Cloud, Zap, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const assets = [
  {
    name: "Main DB Cluster (NA-1)",
    category: "Database",
    owner: "John Doe",
    ownerInitials: "JD",
    status: "Operational",
    date: "Oct 22, 2023",
    icon: <Database className="w-4 h-4" />,
    iconBg: "bg-indigo-50 text-indigo-600",
    statusColor: "bg-emerald-50 text-emerald-600"
  },
  {
    name: "Static CDN Assets (EU-W)",
    category: "Storage",
    owner: "M. Alhalabi",
    ownerInitials: "MA",
    status: "Active",
    date: "Oct 18, 2023",
    icon: <Cloud className="w-4 h-4" />,
    iconBg: "bg-blue-50 text-blue-600",
    statusColor: "bg-indigo-50 text-indigo-600"
  },
  {
    name: "Legacy Auth Gateway",
    category: "Infrastructure",
    owner: "Sarah K.",
    ownerInitials: "SK",
    status: "Maintenance",
    date: "Oct 15, 2023",
    icon: <Zap className="w-4 h-4" />,
    iconBg: "bg-amber-50 text-amber-600",
    statusColor: "bg-amber-50 text-amber-600"
  },
  {
    name: "Redis Cache Node Z4",
    category: "Performance",
    owner: "System",
    ownerInitials: "ST",
    status: "Degraded",
    date: "Oct 14, 2023",
    icon: <AlertCircle className="w-4 h-4" />,
    iconBg: "bg-red-50 text-red-600",
    statusColor: "bg-red-50 text-red-600"
  }
];

const AssetTable = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-zinc-100 overflow-hidden flex flex-col w-full">
      {/* Table Header */}
      <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Asset Distribution</h3>
          <p className="text-sm text-zinc-400">Detailed inventory and status across geographic regions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-all">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#8B5CF6] rounded-xl text-sm font-semibold text-white hover:bg-purple-700 transition-all shadow-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-x-auto px-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-50">
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Asset Name</th>
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Category</th>
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Owner</th>
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Status</th>
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Date</th>
              <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {assets.map((asset, index) => (
              <tr key={index} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${asset.iconBg}`}>
                      {asset.icon}
                    </div>
                    <span className="text-sm font-bold text-zinc-900">{asset.name}</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-zinc-500 font-medium">{asset.category}</span>
                </td>
                <td className="px-4 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold text-zinc-500 border border-zinc-200">
                      {asset.ownerInitials}
                    </div>
                    <span className="text-sm text-zinc-600">{asset.owner}</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-bold ${asset.statusColor}`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                    {asset.status}
                  </div>
                </td>
                <td className="px-4 py-5">
                  <span className="text-sm text-zinc-500">{asset.date}</span>
                </td>
                <td className="px-4 py-5 text-right">
                  <button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Pagination */}
      <div className="p-6 border-t border-zinc-50 flex items-center justify-between">
        <p className="text-xs font-medium text-zinc-400">Showing 4 of 24 assets</p>
        <div className="flex items-center gap-2">
          <button className="p-2 text-zinc-400 hover:bg-zinc-50 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                className={`w-8 h-8 text-xs font-bold rounded-lg transition-all ${page === 1 ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-zinc-50'}`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="p-2 text-zinc-400 hover:bg-zinc-50 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetTable;