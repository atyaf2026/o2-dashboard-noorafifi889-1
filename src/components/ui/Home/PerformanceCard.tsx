"use client";
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { value: 40 }, { value: 45 }, { value: 65 }, { value: 60 },
  { value: 50 }, { value: 45 }, { value: 55 }, { value: 75 },
];

export const PerformanceCard = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6 w-full h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">Performance Over Time</h3>
          <p className="text-sm text-zinc-400">Transaction volume compared to last month</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-xl text-sm font-medium text-zinc-600">
          Monthly <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 min-h-[220px] w-full relative bg-[#F8F9FB] rounded-2xl overflow-hidden p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
            <Tooltip content={() => null} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              fill="url(#performanceGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <StatItem label="Users" value="2.4k" />
        <StatItem label="Click Rate" value="18.2%" />
        <StatItem label="Bounce" value="24%" />
        <StatItem label="Goal" value="Reached" isPurple />
      </div>
    </div>
  );
};

const StatItem = ({ label, value, isPurple }: { label: string, value: string, isPurple?: boolean }) => (
  <div className="text-center">
    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest mb-1">{label}</p>
    <p className={`text-lg font-bold ${isPurple ? 'text-[#8B5CF6]' : 'text-zinc-900'}`}>{value}</p>
  </div>
);