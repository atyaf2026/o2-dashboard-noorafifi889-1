import { Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { StatCard } from './StatCard';
import { UserTable } from './UserTable';
import { InviteBanner, RolePermissions } from './Permissions';
import {mockUsers} from './MockUsers';
export default function Users() {


  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Users Management</h1>
          <p className="text-gray-500 mt-1">Manage trainee accounts, roles, and platform permissions.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-gray-50 shadow-sm transition-all">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-gray-50 shadow-sm transition-all">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,284" trend="+12%" />
        <StatCard title="Active Now" value="432" statusColor="bg-emerald-500" />
        <StatCard title="Pending Invites" value="18" />
        <StatCard title="New Trainees" value="54" />
      </div>

      <div className="space-y-4">
        <UserTable users={mockUsers} />
        
        <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 flex justify-between items-center text-sm font-medium text-gray-500">
          <span>Showing 1 to 5 of 1,284 users</span>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-lg">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">2</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">3</button>
            <span>...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">257</button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RolePermissions />
        <InviteBanner />
      </div>
    </div>
  );
}