"use client";
import { ChartNoAxesCombined, ClipboardMinus, House, Settings, UserCheck } from 'lucide-react';
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Sidebar() {
    const pathname = usePathname();

  const menu = [
    { name: "Home", icon: House, path: "/" },
    { name: "Analytics", icon: ChartNoAxesCombined, path: "/analytics" },
    { name: "Users", icon: UserCheck, path: "/users" },
    { name: "Reports", icon: ClipboardMinus, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];
  return (
    <aside className="w-72 border-r bg-white flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6 h-20 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">O2</div>
        <h2 className="font-bold text-xl tracking-tight text-zinc-900">O2 Dashboard</h2>
      </div>
 <nav className="flex-1 p-4 space-y-2">
      {menu.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all
              ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-zinc-500 hover:bg-zinc-50"
              }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
      <div className="p-6 border-t space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-200 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-zinc-900">Mohammed Alhalabi</p>
            <p className="text-zinc-500 text-xs text-nowrap">User Settings</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
