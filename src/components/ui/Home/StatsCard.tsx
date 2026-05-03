import React from "react";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
  badge?: string;
  subtitle?: string;
  variant?: "emerald" | "indigo"; // أضفنا خيار لتغيير اللون بناءً على النوع
}

export const StatsCard = ({ title, value, icon, badge, subtitle, variant = "emerald" }: Props) => {
  const isEmerald = variant === "emerald";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${isEmerald ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
          {React.isValidElement(icon) 
            ? React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" }) 
            : icon}
        </div>
        {badge && (
          <span className={`text-[11px] px-2.5 py-1 rounded-full ${isEmerald ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
            {badge}
          </span>
        )}
      </div>

      <div>
        <h4 className="text-[14px] font-medium text-zinc-500 mb-1">{title}</h4>
        <p className="text-2xl  text-zinc-900 tracking-tight">{value}</p>        
        
        {isEmerald ? (
          <div className="w-full bg-zinc-50 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="bg-emerald-500 h-full w-[70%] rounded-full" />
          </div>
        ) : (
          subtitle && (
            <div className="flex items-center gap-1 mt-4">
              <span className="text-[12px] text-zinc-400">↗ {subtitle}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};