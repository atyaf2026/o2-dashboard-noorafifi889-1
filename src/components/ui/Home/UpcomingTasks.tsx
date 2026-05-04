import React from 'react';
import { CheckCircle2, MoreHorizontal } from 'lucide-react';

const tasks = [
  { title: 'Review quarterly projections', deadline: 'Due in 2 hours', priority: 'HIGH', color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Sync with marketing team', deadline: 'Tomorrow at 10:00 AM', priority: 'MEDIUM', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: 'Update system documentation', deadline: 'Friday, Oct 24', priority: 'LOW', color: 'text-zinc-500', bg: 'bg-zinc-50' },
];

const UpcomingTasks = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 w-full h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Upcoming Tasks</h3>
            <p className="text-sm text-zinc-400">Deadlines & priorities</p>
          </div>
        </div>
        <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-zinc-200 rounded-md group-hover:border-indigo-500 transition-colors" />
              <div>
                <p className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{task.title}</p>
                <p className="text-xs text-zinc-400">{task.deadline}</p>
              </div>
            </div>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md tracking-tighter ${task.bg} ${task.color}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;