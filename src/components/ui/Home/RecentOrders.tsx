import { ShoppingBag } from 'lucide-react';

const orders = [
  { id: '#3492', time: '2 minutes ago', price: '$242.22', status: 'Paid', color: 'emerald' },
  { id: '#3491', time: '1 hour ago', price: '$1,122.22', status: 'Pending', color: 'amber' },
  { id: '#3490', time: '3 hours ago', price: '$84.52', status: 'Paid', color: 'emerald' },
  { id: '#3489', time: 'Yesterday', price: '$342.22', status: 'Canceled', color: 'zinc' },
];

export const RecentOrders = () => {
  return (
    <div className="bg-white rounded-3xl p-6 w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-zinc-900">Recent Orders</h3>
        <button className="text-sm font-semibold text-[#8B5CF6] hover:underline">View all</button>
      </div>

      <div className="space-y-5 flex-1">
        {orders.map((order, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 border border-zinc-100">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Order {order.id}</p>
                <p className="text-xs text-zinc-400">{order.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-zinc-900">{order.price}</p>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md bg-${order.color}-50 text-${order.color}-600`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for the bottom illustration/card */}
      <div className="mt-4 bg-zinc-100 rounded-2xl h-24 w-full bg-gradient-to-br from-zinc-200 to-zinc-50 opacity-60" />
    </div>
  );
};