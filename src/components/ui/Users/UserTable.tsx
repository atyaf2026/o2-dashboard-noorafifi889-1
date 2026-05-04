interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Student';
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
}

const statusStyles = {
  Active: 'text-emerald-600 before:bg-emerald-500',
  Inactive: 'text-gray-500 before:bg-gray-400',
  Pending: 'text-amber-500 before:bg-amber-500',
};

const roleStyles = {
  Admin: 'bg-indigo-50 text-indigo-700',
  Student: 'bg-slate-100 text-slate-600',
};

export const UserTable = ({ users }: { users: User[] }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
    <table className="w-full text-left">
      <thead className="bg-gray-50/50 border-b border-gray-100">
        <tr className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <th className="px-6 py-4">User</th>
          <th className="px-6 py-4">Role</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4">Join Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${roleStyles[user.role]}`}>
                {user.role}
              </span>
            </td>
            <td className="px-6 py-4">
              <span className={`flex items-center gap-2 text-sm font-medium before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full ${statusStyles[user.status]}`}>
                {user.status}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">{user.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);