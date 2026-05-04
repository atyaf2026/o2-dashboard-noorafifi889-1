import { DollarSign, Zap } from "lucide-react";
import { ChartCard } from "./ChartCard";
import { StatsCard } from "./StatsCard";
import AssetTable from "./AssetTable";
import UpcomingTasks from "./UpcomingTasks";
import SystemHealth from "./SystemHealth";
import { RecentOrders } from "./RecentOrders";
import { PerformanceCard } from "./PerformanceCard";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
          Welcome back, Mohammed
        </h1>
        <p className="text-zinc-500 text-sm">
          Here's what's happening with your projects today.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Revenue" 
          value="$48,290.00" 
          icon={<DollarSign className="w-5 h-5" />} 
          badge="+12.5%" 
          variant="emerald"
        />
        <StatsCard 
          title="Active Sessions" 
          value="1,284" 
          icon={<Zap className="w-5 h-5" />} 
          badge="Active" 
          subtitle="42 users online now" 
          variant="indigo"
        />
        <div className="md:col-span-2">
          <ChartCard />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceCard />
        </div>
        <div className="lg:col-span-1">
          <RecentOrders />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SystemHealth />
        <UpcomingTasks />
      </section>

      <section className="w-full pb-10">
        <AssetTable />
      </section>
    </div>
  );
}